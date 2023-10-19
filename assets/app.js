/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/base.scss';

document.addEventListener("DOMContentLoaded", function () {
    (function (window, document) {
        var menu = document.getElementById('menu'),
            rollBack,
            WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange' : 'resize'
        ;

        function toggleHorizontal() {
            menu.classList.remove('closing');
            [].forEach.call(
                document.getElementById('menu').querySelectorAll('.custom-can-transform'),
                function (el) {
                    el.classList.toggle('pure-menu-horizontal');
                }
            );
        };

        function toggleMenu() {
            // set timeout so that the panel has a chance to roll up
            // before the menu switches states
            if (menu.classList.contains('open')) {
                menu.classList.add('closing');
                rollBack = setTimeout(toggleHorizontal, 200);
            }
            else {
                if (menu.classList.contains('closing')) {
                    clearTimeout(rollBack);
                } else {
                    toggleHorizontal();
                }
            }
            menu.classList.toggle('open');
            document.getElementById('toggle').classList.toggle('x');
        };

        function closeMenu() {
            if (menu.classList.contains('open')) {
                toggleMenu();
            }
        }

        document.getElementById('toggle').addEventListener('click', function (e) {
            toggleMenu();
            e.preventDefault();
        });

        window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
    })(this, this.document);
});




// (function (window, document) {
//     var menu = document.getElementById('menu'),
//         rollback,
//         WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange' : 'resize';

//     function toggleHorizontal() {
//         menu.classList.remove('closing');
//         [].forEach.call(
//             document.getElementById('menu').querySelectorAll('.custom-can-transform'),
//             function (el) {
//                 el.classList.toggle('pure-menu-horizontal');
//             }
//         );
//     };

//     function toggleMenu() {
//         // set timeout so that the panel has a chance to roll up
//         // before the menu switches states
//         if (menu.classList.contains('open')) {
//             menu.classList.add('closing');
//             rollBack = setTimeout(toggleHorizontal, 900);
//         }
//         else {
//             if (menu.classList.contains('closing')) {
//                 clearTimeout(rollBack);
//             } else {
//                 toggleHorizontal();
//             }
//         }
//         menu.classList.toggle('open');
//         document.getElementById('toggle').classList.toggle('x');
//     };

//     function closeMenu() {
//         if (menu.classList.contains('open')) {
//             toggleMenu();
//         }
//     }

//     document.getElementById('toggle').addEventListener('click', function (e) {
//         toggleMenu();
//         e.preventDefault();
//     });

//     window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
// })(this, this.document);