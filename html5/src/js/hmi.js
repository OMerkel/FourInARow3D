/**
 * @file hmi.js
 * @author Oliver Merkel <Merkel(dot)Oliver(at)web(dot)de>
 * @date 2018 January 2
 *
 * @section LICENSE
 *
 * Copyright 2018, Oliver Merkel <Merkel(dot)Oliver(at)web(dot)de>
 * All rights reserved.
 *
 * Released under the MIT license.
 *
 * @section DESCRIPTION
 *
 * @brief Class Hmi.
 * 
 * Class representing the view or Hmi of Four in a Row 3D.
 * This Four in a Row 3D board game is used for demonstration of the
 * Monte Carlo Tree Search (MCTS) with UCB (Upper Confidence Bounds)
 * applied to trees (UCT in short) for the computer player AI.
 *
 */

function Hmi() {}

Hmi.prototype.resize = function () {
  var offsetHeight = 64,
    availableWidth = window.innerWidth - 32,
    availableHeight = window.innerHeight - offsetHeight;
  var size = Math.min(availableWidth, availableHeight);
  this.paper.setSize( size, size );
  var boardMarginTop = (availableHeight - size) / 2;
  $('#board').css({ 'margin-top': boardMarginTop + 'px' });

  $('#game-page').css({
    'background-size': 'auto ' + (size/6) + 'px',
  });
  var size = size / 10;
  var minSize = 38;
  size = size < minSize ? minSize : size;
  var maxSize = 100;
  size = maxSize < size ? maxSize : size;
  $('#customMenu').css({
    'width': size+'px', 'height': size+'px',
    'background-size': size+'px ' + size+'px',
  });
  $('#customBackRules').css({
    'width': size+'px', 'height': size+'px',
    'background-size': size+'px ' + size+'px',
  });
  $('#customBackOptions').css({
    'width': size+'px', 'height': size+'px',
    'background-size': size+'px ' + size+'px',
  });
  $('#customBackAbout').css({
    'width': size+'px', 'height': size+'px',
    'background-size': size+'px ' + size+'px',
  });
};

Hmi.prototype.initBoard = function () {
  this.paper = Raphael( 'board', 400, 400);
  this.paper.setViewBox( 0, 0, 6, 6, false );
  this.paper.rect(0, 0, 6, 6).attr('stroke-width', 0.03);
  var
    a = { x: 1.7, y: 0.00 },
    b = { x: 5.8, y: 1.30 },
    d = { x: -0.4, y: 0.8 },
    e = { x: (b.x-a.x) / 4, y: (b.y-a.y) / 4 };

  /* floor */
  for(var x=0; x<4; ++x) {
    for(var y=0; y<4; ++y) {
      this.paper.path(
        'M' + (a.x + x*e.x + y*d.x) + ',' + (a.y + x*e.y+ y*d.y + 2) +
        'l' + (e.x) + ',' + (e.y) +
        'l' + (d.x) + ',' + (d.y) +
        'l' + (-e.x) + ',' + (-e.y) + 'z'
      ).attr({ 'stroke-width': 0.01, 'stroke-dasharray': '', stroke: 'black',
        fill: '#2f4f2f' });
    }
  }

  /* poles */
  for(var x=0; x<4; ++x) {
    for(var y=0; y<4; ++y) {
      pole = {
          x: (a.x + (x + 0.5) * d.x + (y + 0.5) * e.x),
          y: (a.y + (x + 0.5) * d.y + (y + 0.5) * e.y)
      };
      this.paper.path(
        'M' + pole.x + ',' + pole.y +
        'L' + pole.x + ',' + (pole.y + 2 - 0.05)
      ).attr({ 'stroke-width': 0.05, 'stroke-dasharray': '',
        'stroke-linecap': 'round', stroke: 'gray' });
    }
  }

  this.spheres = [[], [], [], []];
  for(var x=0; x<4; ++x) {
    for(var y=0; y<4; ++y) {
      this.spheres[x][y] = [];
      for(var z=0; z<=4; ++z) {
        this.spheres[x][y][z] = this.sphere( x, y, z );
      }
    }
  }

  /* ceiling */
  this.tile = [];
  for(var x=0; x<4; ++x) {
    this.tile[x] = [];
    for(var y=0; y<4; ++y) {
      this.tile[x][y] = this.paper.path(
        'M' + (a.x + x*e.x + y*d.x) + ',' + (a.y + x*e.y+ y*d.y) +
        'l' + (e.x) + ',' + (e.y) +
        'l' + (d.x) + ',' + (d.y) +
        'l' + (-e.x) + ',' + (-e.y) + 'z'
      ).attr({ 'stroke-width': '0.01', 'stroke-dasharray': '',
        stroke: 'none',
        fill: 'none',
        opacity: 0.0, x: x, y: y
      });
      this.tile[x][y].click( this.clickSelect.bind(this) );
    }
  }
  this.action = null;
};

Hmi.prototype.sphere = function ( x, y, z ) {
  var spherePosition = this.spherePosition( x, y, z );
  return this.paper.circle( spherePosition.x, spherePosition.y, 0.25 ).attr(
    { 'stroke-width': 0.01, 'stroke-dasharray': '',
    stroke: 'none', fill: 'none' }
  );
};

Hmi.prototype.spherePosition = function ( x, y, z ) {
  var
    a = { x: 1.7, y: 0.00 },
    b = { x: 5.8, y: 1.30 },
    d = { x: -0.4, y: 0.8 },
    e = { x: (b.x-a.x) / 4, y: (b.y-a.y) / 4 };
  var sphere = {
    x: (a.x + (y + 0.5) * d.x + (x + 0.5) * e.x),
    y: (a.y + (y + 0.5) * d.y + (x + 0.5) * e.y + 1.75 - (z/2.0))
  };
  return { x: sphere.x, y: sphere.y };
};

Hmi.prototype.restoreInitialBoard = function () {
};

Hmi.prototype.update = function(board, actionInfo) {
  this.resize();
  this.board = board;
  var t = (null == actionInfo) ? null : actionInfo.action;
  for(var x=0; x<4; ++x) {
    for(var y=0; y<4; ++y) {
      for(var z=0; z<4; ++z) {
        if((null==t)||(x!=t.x)||(y!=t.y)||(z!=t.z)) {
          this.spheres[x][y][z].attr({
            stroke: 2 == board.position[x][y][z] ? 'none' : 'black',
            'stroke-width': 0.01,
            fill: 2 == board.position[x][y][z] ? 'none' :
              0 == board.position[x][y][z] ? 'red' : 'blue'
          });
        }
      }
    }
  }
  if(actionInfo) {
    console.log('Animate ' + 
      String.fromCharCode(97+t.x) + ( t.y + 1));
    this.animationActionInfo = actionInfo;
    this.animateStep1();
  } else {
    if( board.nextishuman ) {
      this.prepareHumanMove();
    } else if ( 0 < board.actions.length ) {
      this.requestAiAction();
    }
  }
};

Hmi.prototype.animateStep1 = function() {
  var t = this.animationActionInfo.action,
    opponentColor = 0 == (this.board.turn ^ 1) ? 'red' : 'blue';
  var sphere = this.spheres[t.x][t.y][4];
  var cy = this.spherePosition( t.x, t.y, 4 ).y
  sphere.attr({ fill: 'gray', stroke: 'black', cy: cy });
  cy = this.spherePosition( t.x, t.y, t.z ).y
  sphere.animate({
    cy: cy,
    fill: opponentColor
  }, 1000, this.animateStep2.bind(this));
};

Hmi.prototype.animateStep2 = function() {
  var t = this.animationActionInfo.action,
    opponentColor = 0 == (this.board.turn ^ 1) ? 'red' : 'blue';
  var animatedSphere = this.spheres[t.x][t.y][4];
  var targetSphere = this.spheres[t.x][t.y][t.z];
  var cy = this.spherePosition( t.x, t.y, 4 ).y
  animatedSphere.attr({ fill: 'none', stroke: 'none', cy: cy });
  targetSphere.attr({ fill: opponentColor, stroke: 'black' });
  if( this.board.nextishuman ) {
    this.prepareHumanMove();
  } else if ( 0 < this.board.actions.length ) {
    this.requestAiAction();
  }
  if ( 0 == this.board.actions.length ) {
    if ( 0 < this.board.winning.length ) {
      for(var n=0; n<this.board.winning.length; ++n) {
        var w=this.board.winning[n]
        this.spheres[w.x][w.y][w.z].attr({
          stroke: 'white',
          'stroke-width': 0.03
        });
      }
    }
  }
};

Hmi.prototype.prepareHumanMove = function () {
  var actions = this.board.actions;
  for(var n=0; n<actions.length; ++n) {
    var a=actions[n];
    this.tile[a.x][a.y].attr({ stroke: 'gray', fill: '#2f4f2f', opacity: 0.2 });
  }
};

Hmi.prototype.requestAiAction = function () {
  /* @TODO: disable 'new game' */
  var playerRed = $('#playerredai').is(':checked') ? 'AI' : 'Human';
  var playerBlue = $('#playerblueai').is(':checked') ? 'AI' : 'Human';
  this.engine.postMessage({ class: 'request', request: 'actionbyai',
    playerred: playerRed, playerblue: playerBlue });
};

Hmi.prototype.clickSelect = function ( ev ) {
  this.deactivateClicks();
  this.selected = {
    x: Math.floor(Number(ev.target.attributes.x.value)),
    y: Math.floor(Number(ev.target.attributes.y.value))
  };
  var playerRed = $('#playerredai').is(':checked') ? 'AI' : 'Human';
  var playerBlue = $('#playerblueai').is(':checked') ? 'AI' : 'Human';

  this.action = { x: this.selected.x, y: this.selected.y };
  this.engine.postMessage({ class: 'request', request: 'perform',
    action: this.action, playerred: playerRed, playerblue: playerBlue });
};

Hmi.prototype.unbindAllEvents = function ( elem ) {
  /*
   * elem.unclick( this.clickTarget.bind(this) ) not working
   */
  for(var x=0; x<4; ++x) {
    for(var y=0; y<4; ++y) {
      this.tile[x][y].attr({ stroke: 'none', fill: 'none', opacity: 0.0 });
    }
  }
};

Hmi.prototype.isEqual= function ( src, tgt ) {
  return src.x == tgt.x && src.y == tgt.y;
};

Hmi.prototype.engineInit = function() {
  var playerRed = $('#playerredai').is(':checked') ? 'AI' : 'Human';
  var playerBlue = $('#playerblueai').is(':checked') ? 'AI' : 'Human';

  this.engine = new Worker('js/controller.js');
  this.engine.addEventListener('message', this.engineEventListener.bind(this), false);
  this.engine.postMessage({ class: 'request', request: 'start',
    playerred: playerRed, playerblue: playerBlue });
};

Hmi.prototype.init = function () {
  this.initBoard();
  var $window = $(window);
  $window.resize( this.resize.bind( this ) );
  $window.resize();
  this.engineInit();
  $('#new').on( 'click', this.restart.bind(this) );
};

Hmi.prototype.deactivateClicks = function() {
  for(var x=0; x<4; ++x) {
    for(var y=0; y<4; ++y) {
      this.tile[x][y].attr({ stroke: 'none', fill: 'none', opacity: 0.0 });
    }
  }
};

Hmi.prototype.restart = function() {
  this.deactivateClicks();
  var playerRed = $('#playerredai').is(':checked') ? 'AI' : 'Human';
  var playerBlue = $('#playerblueai').is(':checked') ? 'AI' : 'Human';

  this.engine.postMessage({ class: 'request', request: 'restart',
    playerred: playerRed, playerblue: playerBlue });
  $( '#left-panel' ).panel( 'close' );
};

Hmi.prototype.engineEventListener = function( eventReceived ) {
  var data = eventReceived.data;
  switch (data.eventClass) {
    case 'response':
      this.processEngineResponse( eventReceived );
      break;
    case 'request':
      this.processEngineRequest( eventReceived );
      break;
    default:
      console.log('Engine used unknown event class');
  }
};

Hmi.prototype.processEngineResponse = function( eventReceived ) {
  var data = eventReceived.data;
  switch (data.state) {
    case 'message':
      console.log('Engine reported message: ' + data.message);
      break;
    default:
      console.log('Engine reported unknown state');
  }
};

Hmi.prototype.processEngineRequest = function( eventReceived ) {
  var data = eventReceived.data;
  switch (data.request) {
    case 'redraw':
      console.log('Engine request: ' + data.request);
      this.update(data.board, data.actioninfo);
      break;
    case 'restore':
      console.log('Engine request: ' + data.request);
      this.restoreInitialBoard();
      break;
    default:
      console.log('Engine used unknown request');
  }
};

$(document).ready( function () { (new Hmi()).init(); });
