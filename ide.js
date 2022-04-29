let editor;

window.onload = function () {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/terminal");
    editor.session.setMode("ace/mode/fortran");
}