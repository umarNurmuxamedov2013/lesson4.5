let name =  prompt ("Ism")
let letter = prompt("harf kiriting").toLocaleLowerCase() .toUpperCase();
let harf = name.includes(letter)

if (harf) {
    alert(name + "da " + letter + " bor ")
}else{
    alert(name + "da " + latter + " bor ")
}