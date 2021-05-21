var tabLists = document.getElementsByClassName('tabList');
var items = document.getElementsByClassName('item');
// for (var i = tabLists < tabLists.length; i++) {
//     tabLists[i].onclick = function() {
//         this.setAttribute = ('class', 'tacListChange');
//     }
// }
tabLists[1].onclick = function() {
    this.className = "tacListChange";
}