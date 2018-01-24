//
// Copyright (c) 2018 Oliver Merkel
// All rights reserved.
//
// @author Oliver Merkel, <Merkel(dot)Oliver(at)web(dot)de>
//

FourInARowBoard.ROWS = [
  [ { x: 0, y: 0, z: 0 }, { x: 1, y: 0, z: 0 }, { x: 2, y: 0, z: 0 }, { x: 3, y: 0, z: 0 } ],
  [ { x: 0, y: 1, z: 0 }, { x: 1, y: 1, z: 0 }, { x: 2, y: 1, z: 0 }, { x: 3, y: 1, z: 0 } ],
  [ { x: 0, y: 2, z: 0 }, { x: 1, y: 2, z: 0 }, { x: 2, y: 2, z: 0 }, { x: 3, y: 2, z: 0 } ],
  [ { x: 0, y: 3, z: 0 }, { x: 1, y: 3, z: 0 }, { x: 2, y: 3, z: 0 }, { x: 3, y: 3, z: 0 } ],
  [ { x: 0, y: 0, z: 1 }, { x: 1, y: 0, z: 1 }, { x: 2, y: 0, z: 1 }, { x: 3, y: 0, z: 1 } ],
  [ { x: 0, y: 1, z: 1 }, { x: 1, y: 1, z: 1 }, { x: 2, y: 1, z: 1 }, { x: 3, y: 1, z: 1 } ],
  [ { x: 0, y: 2, z: 1 }, { x: 1, y: 2, z: 1 }, { x: 2, y: 2, z: 1 }, { x: 3, y: 2, z: 1 } ],
  [ { x: 0, y: 3, z: 1 }, { x: 1, y: 3, z: 1 }, { x: 2, y: 3, z: 1 }, { x: 3, y: 3, z: 1 } ],
  [ { x: 0, y: 0, z: 2 }, { x: 1, y: 0, z: 2 }, { x: 2, y: 0, z: 2 }, { x: 3, y: 0, z: 2 } ],
  [ { x: 0, y: 1, z: 2 }, { x: 1, y: 1, z: 2 }, { x: 2, y: 1, z: 2 }, { x: 3, y: 1, z: 2 } ],
  [ { x: 0, y: 2, z: 2 }, { x: 1, y: 2, z: 2 }, { x: 2, y: 2, z: 2 }, { x: 3, y: 2, z: 2 } ],
  [ { x: 0, y: 3, z: 2 }, { x: 1, y: 3, z: 2 }, { x: 2, y: 3, z: 2 }, { x: 3, y: 3, z: 2 } ],
  [ { x: 0, y: 0, z: 3 }, { x: 1, y: 0, z: 3 }, { x: 2, y: 0, z: 3 }, { x: 3, y: 0, z: 3 } ],
  [ { x: 0, y: 1, z: 3 }, { x: 1, y: 1, z: 3 }, { x: 2, y: 1, z: 3 }, { x: 3, y: 1, z: 3 } ],
  [ { x: 0, y: 2, z: 3 }, { x: 1, y: 2, z: 3 }, { x: 2, y: 2, z: 3 }, { x: 3, y: 2, z: 3 } ],
  [ { x: 0, y: 3, z: 3 }, { x: 1, y: 3, z: 3 }, { x: 2, y: 3, z: 3 }, { x: 3, y: 3, z: 3 } ],

  [ { x: 0, y: 0, z: 0 }, { x: 0, y: 1, z: 0 }, { x: 0, y: 2, z: 0 }, { x: 0, y: 3, z: 0 } ],
  [ { x: 1, y: 0, z: 0 }, { x: 1, y: 1, z: 0 }, { x: 1, y: 2, z: 0 }, { x: 1, y: 3, z: 0 } ],
  [ { x: 2, y: 0, z: 0 }, { x: 2, y: 1, z: 0 }, { x: 2, y: 2, z: 0 }, { x: 2, y: 3, z: 0 } ],
  [ { x: 3, y: 0, z: 0 }, { x: 3, y: 1, z: 0 }, { x: 3, y: 2, z: 0 }, { x: 3, y: 3, z: 0 } ],
  [ { x: 0, y: 0, z: 1 }, { x: 0, y: 1, z: 1 }, { x: 0, y: 2, z: 1 }, { x: 0, y: 3, z: 1 } ],
  [ { x: 1, y: 0, z: 1 }, { x: 1, y: 1, z: 1 }, { x: 1, y: 2, z: 1 }, { x: 1, y: 3, z: 1 } ],
  [ { x: 2, y: 0, z: 1 }, { x: 2, y: 1, z: 1 }, { x: 2, y: 2, z: 1 }, { x: 2, y: 3, z: 1 } ],
  [ { x: 3, y: 0, z: 1 }, { x: 3, y: 1, z: 1 }, { x: 3, y: 2, z: 1 }, { x: 3, y: 3, z: 1 } ],
  [ { x: 0, y: 0, z: 2 }, { x: 0, y: 1, z: 2 }, { x: 0, y: 2, z: 2 }, { x: 0, y: 3, z: 2 } ],
  [ { x: 1, y: 0, z: 2 }, { x: 1, y: 1, z: 2 }, { x: 1, y: 2, z: 2 }, { x: 1, y: 3, z: 2 } ],
  [ { x: 2, y: 0, z: 2 }, { x: 2, y: 1, z: 2 }, { x: 2, y: 2, z: 2 }, { x: 2, y: 3, z: 2 } ],
  [ { x: 3, y: 0, z: 2 }, { x: 3, y: 1, z: 2 }, { x: 3, y: 2, z: 2 }, { x: 3, y: 3, z: 2 } ],
  [ { x: 0, y: 0, z: 3 }, { x: 0, y: 1, z: 3 }, { x: 0, y: 2, z: 3 }, { x: 0, y: 3, z: 3 } ],
  [ { x: 1, y: 0, z: 3 }, { x: 1, y: 1, z: 3 }, { x: 1, y: 2, z: 3 }, { x: 1, y: 3, z: 3 } ],
  [ { x: 2, y: 0, z: 3 }, { x: 2, y: 1, z: 3 }, { x: 2, y: 2, z: 3 }, { x: 2, y: 3, z: 3 } ],
  [ { x: 3, y: 0, z: 3 }, { x: 3, y: 1, z: 3 }, { x: 3, y: 2, z: 3 }, { x: 3, y: 3, z: 3 } ],

  [ { x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 1 }, { x: 0, y: 0, z: 2 }, { x: 0, y: 0, z: 3 } ],
  [ { x: 1, y: 0, z: 0 }, { x: 1, y: 0, z: 1 }, { x: 1, y: 0, z: 2 }, { x: 1, y: 0, z: 3 } ],
  [ { x: 2, y: 0, z: 0 }, { x: 2, y: 0, z: 1 }, { x: 2, y: 0, z: 2 }, { x: 2, y: 0, z: 3 } ],
  [ { x: 3, y: 0, z: 0 }, { x: 3, y: 0, z: 1 }, { x: 3, y: 0, z: 2 }, { x: 3, y: 0, z: 3 } ],
  [ { x: 0, y: 1, z: 0 }, { x: 0, y: 1, z: 1 }, { x: 0, y: 1, z: 2 }, { x: 0, y: 1, z: 3 } ],
  [ { x: 1, y: 1, z: 0 }, { x: 1, y: 1, z: 1 }, { x: 1, y: 1, z: 2 }, { x: 1, y: 1, z: 3 } ],
  [ { x: 2, y: 1, z: 0 }, { x: 2, y: 1, z: 1 }, { x: 2, y: 1, z: 2 }, { x: 2, y: 1, z: 3 } ],
  [ { x: 3, y: 1, z: 0 }, { x: 3, y: 1, z: 1 }, { x: 3, y: 1, z: 2 }, { x: 3, y: 1, z: 3 } ],
  [ { x: 0, y: 2, z: 0 }, { x: 0, y: 2, z: 1 }, { x: 0, y: 2, z: 2 }, { x: 0, y: 2, z: 3 } ],
  [ { x: 1, y: 2, z: 0 }, { x: 1, y: 2, z: 1 }, { x: 1, y: 2, z: 2 }, { x: 1, y: 2, z: 3 } ],
  [ { x: 2, y: 2, z: 0 }, { x: 2, y: 2, z: 1 }, { x: 2, y: 2, z: 2 }, { x: 2, y: 2, z: 3 } ],
  [ { x: 3, y: 2, z: 0 }, { x: 3, y: 2, z: 1 }, { x: 3, y: 2, z: 2 }, { x: 3, y: 2, z: 3 } ],
  [ { x: 0, y: 3, z: 0 }, { x: 0, y: 3, z: 1 }, { x: 0, y: 3, z: 2 }, { x: 0, y: 3, z: 3 } ],
  [ { x: 1, y: 3, z: 0 }, { x: 1, y: 3, z: 1 }, { x: 1, y: 3, z: 2 }, { x: 1, y: 3, z: 3 } ],
  [ { x: 2, y: 3, z: 0 }, { x: 2, y: 3, z: 1 }, { x: 2, y: 3, z: 2 }, { x: 2, y: 3, z: 3 } ],
  [ { x: 3, y: 3, z: 0 }, { x: 3, y: 3, z: 1 }, { x: 3, y: 3, z: 2 }, { x: 3, y: 3, z: 3 } ],

  [ { x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 0 }, { x: 2, y: 2, z: 0 }, { x: 3, y: 3, z: 0 } ],
  [ { x: 0, y: 0, z: 1 }, { x: 1, y: 1, z: 1 }, { x: 2, y: 2, z: 1 }, { x: 3, y: 3, z: 1 } ],
  [ { x: 0, y: 0, z: 2 }, { x: 1, y: 1, z: 2 }, { x: 2, y: 2, z: 2 }, { x: 3, y: 3, z: 2 } ],
  [ { x: 0, y: 0, z: 3 }, { x: 1, y: 1, z: 3 }, { x: 2, y: 2, z: 3 }, { x: 3, y: 3, z: 3 } ],
  [ { x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1 }, { x: 2, y: 2, z: 2 }, { x: 3, y: 3, z: 3 } ],
  [ { x: 0, y: 0, z: 3 }, { x: 1, y: 1, z: 2 }, { x: 2, y: 2, z: 1 }, { x: 3, y: 3, z: 0 } ],

  [ { x: 0, y: 3, z: 0 }, { x: 1, y: 2, z: 0 }, { x: 2, y: 1, z: 0 }, { x: 3, y: 0, z: 0 } ],
  [ { x: 0, y: 3, z: 1 }, { x: 1, y: 2, z: 1 }, { x: 2, y: 1, z: 1 }, { x: 3, y: 0, z: 1 } ],
  [ { x: 0, y: 3, z: 2 }, { x: 1, y: 2, z: 2 }, { x: 2, y: 1, z: 2 }, { x: 3, y: 0, z: 2 } ],
  [ { x: 0, y: 3, z: 3 }, { x: 1, y: 2, z: 3 }, { x: 2, y: 1, z: 3 }, { x: 3, y: 0, z: 3 } ],
  [ { x: 0, y: 3, z: 0 }, { x: 1, y: 2, z: 1 }, { x: 2, y: 1, z: 2 }, { x: 3, y: 0, z: 3 } ],
  [ { x: 0, y: 3, z: 3 }, { x: 1, y: 2, z: 2 }, { x: 2, y: 1, z: 1 }, { x: 3, y: 0, z: 0 } ],

  [ { x: 0, y: 0, z: 0 }, { x: 1, y: 0, z: 1 }, { x: 2, y: 0, z: 2 }, { x: 3, y: 0, z: 3 } ],
  [ { x: 0, y: 1, z: 0 }, { x: 1, y: 1, z: 1 }, { x: 2, y: 1, z: 2 }, { x: 3, y: 1, z: 3 } ],
  [ { x: 0, y: 2, z: 0 }, { x: 1, y: 2, z: 1 }, { x: 2, y: 2, z: 2 }, { x: 3, y: 2, z: 3 } ],
  [ { x: 0, y: 3, z: 0 }, { x: 1, y: 3, z: 1 }, { x: 2, y: 3, z: 2 }, { x: 3, y: 3, z: 3 } ],

  [ { x: 0, y: 0, z: 3 }, { x: 1, y: 0, z: 2 }, { x: 2, y: 0, z: 1 }, { x: 3, y: 0, z: 0 } ],
  [ { x: 0, y: 1, z: 3 }, { x: 1, y: 1, z: 2 }, { x: 2, y: 1, z: 1 }, { x: 3, y: 1, z: 0 } ],
  [ { x: 0, y: 2, z: 3 }, { x: 1, y: 2, z: 2 }, { x: 2, y: 2, z: 1 }, { x: 3, y: 2, z: 0 } ],
  [ { x: 0, y: 3, z: 3 }, { x: 1, y: 3, z: 2 }, { x: 2, y: 3, z: 1 }, { x: 3, y: 3, z: 0 } ],

  [ { x: 0, y: 0, z: 0 }, { x: 0, y: 1, z: 1 }, { x: 0, y: 2, z: 2 }, { x: 0, y: 3, z: 3 } ],
  [ { x: 1, y: 0, z: 0 }, { x: 1, y: 1, z: 1 }, { x: 1, y: 2, z: 2 }, { x: 1, y: 3, z: 3 } ],
  [ { x: 2, y: 0, z: 0 }, { x: 2, y: 1, z: 1 }, { x: 2, y: 2, z: 2 }, { x: 2, y: 3, z: 3 } ],
  [ { x: 3, y: 0, z: 0 }, { x: 3, y: 1, z: 1 }, { x: 3, y: 2, z: 2 }, { x: 3, y: 3, z: 3 } ],

  [ { x: 0, y: 0, z: 3 }, { x: 0, y: 1, z: 2 }, { x: 0, y: 2, z: 1 }, { x: 0, y: 3, z: 0 } ],
  [ { x: 1, y: 0, z: 3 }, { x: 1, y: 1, z: 2 }, { x: 1, y: 2, z: 1 }, { x: 1, y: 3, z: 0 } ],
  [ { x: 2, y: 0, z: 3 }, { x: 2, y: 1, z: 2 }, { x: 2, y: 2, z: 1 }, { x: 2, y: 3, z: 0 } ],
  [ { x: 3, y: 0, z: 3 }, { x: 3, y: 1, z: 2 }, { x: 3, y: 2, z: 1 }, { x: 3, y: 3, z: 0 } ]
];

function FourInARowBoard() {
  this.NONE = 2;
  this.RED = 0;
  this.BLUE = 1;

  this.none = 'none';
}

FourInARowBoard.prototype.setup = function () {
  this.field = [];
  for(var x=0; x<4; ++x) {
    this.field[x] = [];
    for(var y=0; y<4; ++y) {
      this.field[x][y] = [];
      for(var z=0; z<4; ++z) {
        this.field[x][y][z] = this.NONE;
      }
    }
  }
  this.active = this.RED;
};

FourInARowBoard.prototype.copy = function () {
  var result = new FourInARowBoard();
  result.active = this.active;
  result.field = [];
  for(var x=0; x<4; ++x) {
    result.field[x] = [];
    for(var y=0; y<4; ++y) {
      result.field[x][y] = [];
      for(var z=0; z<4; ++z) {
        result.field[x][y][z] = this.field[x][y][z];;
      }
    }
  }
  return result;
};

FourInARowBoard.prototype.getWinningRow = function () {
  var row=[];
  for(var n=0; row.length==0 && n<FourInARowBoard.ROWS.length; ++n) {
    var r=FourInARowBoard.ROWS[n];
    var pivot=this.field[r[0].x][r[0].y][r[0].z];
    if(pivot!=2 &&
      pivot==this.field[r[1].x][r[1].y][r[1].z] &&
      pivot==this.field[r[2].x][r[2].y][r[2].z] &&
      pivot==this.field[r[3].x][r[3].y][r[3].z]) {
      row=r;
    }
  }
  return row;
}

FourInARowBoard.prototype.getActions = function () {
  var actions = [];
  var winningRow = this.getWinningRow();
  if(0 == winningRow.length) {
    for(var x=0; x<4; ++x) {
      for(var y=0; y<4; ++y) {
        if(this.NONE == this.field[x][y][3]) {
          actions[actions.length] = { x: x, y: y };
        }
      }
    }
  }
  return actions;
};

FourInARowBoard.prototype.doAction = function ( action ) {
  action.z = this.NONE == this.field[action.x][action.y][0] ? 0 :
    this.NONE == this.field[action.x][action.y][1] ? 1 :
    this.NONE == this.field[action.x][action.y][2] ? 2 :
    this.NONE == this.field[action.x][action.y][3] ? 3 : -1;
  this.field[action.x][action.y][action.z] = this.active;
  this.switchPlayer();
};

FourInARowBoard.prototype.switchPlayer = function () {
  this.active ^= 1;
};

FourInARowBoard.prototype.getResult = function () {
  return this.RED == this.active ? [ 1, 0 ] : [ 0, 1 ];
};

FourInARowBoard.prototype.repr = function () {
  var repr = '';
  return repr;
};

FourInARowBoard.prototype.getState = function () {
  var field = [];
  for(var x=0; x<4; ++x) {
    field[x] = [];
    for(var y=0; y<4; ++y) {
      field[x][y] = [];
      for(var z=0; z<4; ++z) {
        field[x][y][z] = this.field[x][y][z];
      }
    }
  }
  var actions = this.getActions();
  /*
  console.log( this.repr() );
  console.log( 0 == actions ? "Game over. " +
    ( this.active == this.WHITE ? 'Black' : 'White' ) + ' wins.' :
    ( this.active == this.WHITE ? 'White' : 'Black' ) + ' to play.' );
   */
  return { position: field, turn: this.active,
    actions: actions, previous: this.previousAction };
};
