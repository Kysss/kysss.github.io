// $(document).keypress(function(e){
//     var key = e.which;
//     if(key == 97){
//         $('div').toggle();
//     }
// });

function stone_game(command, terminal) {
    var flag = true;
    var tokens = command.split(" ");
    if (tokens[0] == 'start') {
        terminal.echo('testing');
    }

    if (tokens[0] == 'exit' || tokens[0] == 'quit') {
        terminal.pop();
    }
}



// (function($) {
//     $.fn.tilda = function(eval, options) {
//         if ($('body').data('tilda')) {
//             return $('body').data('tilda').terminal;
//         }
//         this.addClass('tilda');
//         options = options || {};
//         eval = eval || function(command, term) {
//             term.echo("you don't set eval for tilda");
//         };
//         var settings = {
//             prompt: 'tilda> ',
//             name: 'tilda',
//             height: 100,
//             enabled: false,
//             greetings: 'Quake like console',
//             keypress: function(e) {
//                 if (e.which == 96) {
//                     return false;
//                 }
//             }
//         };
//         if (options) {
//             $.extend(settings, options);
//         }
//         this.append('<div class="td"></div>');
//         var self = this;
//         self.terminal = this.find('.td').terminal(eval,
//                                                settings);
//         var focus = false;
//         $(document.documentElement).keypress(function(e) {
//             if (e.charCode == 96) {
//                 self.slideToggle('fast');
//                 self.terminal.command_line.set('');
//                 self.terminal.focus(focus = !focus);
//             }
//         });
//         $('body').data('tilda', this);
//         this.hide();
//         return self;
//     };
// })(jQuery);