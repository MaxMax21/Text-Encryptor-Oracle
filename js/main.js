function encrypt() {
    var input_text = document.getElementById("input_text").value.toLowerCase();
    
    var text_encrypt = input_text.replace(/e/igm, "enter");
    var text_encrypt = text_encrypt.replace(/i/igm, "imes");
    var text_encrypt = text_encrypt.replace(/a/igm, "ai");
    var text_encrypt = text_encrypt.replace(/o/igm, "ober");
    var text_encrypt = text_encrypt.replace(/u/igm, "ufat");

    document.getElementById("card").style.display = "none";
    document.getElementById("show-text").style.display = "flex";
    document.getElementById("text-encrypt").innerHTML = text_encrypt;


}
function decrypt(){
    var input_text = document.getElementById("input_text").value.toLowerCase();

    var text_encrypt = input_text.replace(/enter/igm, "e");
    var text_encrypt = text_encrypt.replace(/imes/igm, "i");
    var text_encrypt = text_encrypt.replace(/ai/igm, "a");
    var text_encrypt = text_encrypt.replace(/ober/igm, "o");
    var text_encrypt = text_encrypt.replace(/ufat/igm, "u");

    document.getElementById("card").style.display = "none";
    document.getElementById("show-text").style.display = "flex";
    document.getElementById("text-encrypt").innerHTML = text_encrypt;

}
function copy() {

    var content_btn_copy = document.getElementById('text-encrypt');
    
    content_btn_copy.select();
    document.execCommand("copy");

    document.getElementById("input_text").value = '';
    alert("Copiado");
}
