Vue.component('square', { //Lab 6 vue componenets
    props: ['x', 'y', 'player'],
    template: 
    `<div
        v-bind:class="'gameSquare'"
        v-bind:style="{'height':'100px', 'width':'100px', 'border':'1px black solid'}">
    </div>`,
    methods: {
        playTurn: function() {
        }
    },
});

var title = new Vue({
    el: '#title',
    data: {
        style: { //Lab 1 Binding html attributes (style)
            color: "red",
            fontSize: "1em",
        },
        title: 'Connect 4', //Lab 0 prototype step
    }
});
var app = new Vue({
    el: '#app',
    data: {
        rows: [], //This lets me render a grid of boxes
        squares: [],
        playerTurn: true, //Lab 3 conditionals
    },
    methods: {
        
    }
});
// I'm too lazy to write out 42 square properties so I just push them below into an array
var counter = 0;
var i = 0;
var j = 0;

for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 6; j++) {
        app.$data.squares[j] = {id: counter, x: i, y: j, player: null};
        counter++;
    }
    app.$data.rows.push(app.$data.squares);
};