function generate() {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var lenString = document.getElementById("string").value;
    var randomstring = '';

    for (var i = 0; i < lenString; i++) {
        var rnum = Math.floor(Math.random() * characters.length);

        randomstring += characters.substring(rnum, rnum + 1);
        // or we can use this also
        // randomstring += characters[rnum];
    }
    document.getElementById("result").innerHTML = "Random String : " + randomstring;
}
