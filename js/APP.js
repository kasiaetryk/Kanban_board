var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  	'X-Client-Id': 83,
	'X-Auth-Token': 'a698ca34bbdd5a1b458c42ab0ccac7c0'
};

$.ajaxSetup({
	headers: myHeaders
});

$.ajax({
    url: baseUrl + '/board',
    method: 'GET',
    success: function(response) {
      setupColumns(response.columns);
    }
});

function setupColumns(columns) {
    columns.forEach(function (column) {
  		var col = new Column(column.id, column.name);
        board.createColumn(col);
        setupCards(col, column.cards);
    });
}

function setupCards(col, cards) {
	cards.forEach(function (card) {
        var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
    	col.createCard(card);
  	})
}
//function randomString() {
//	var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ'.split();
//	var str = '', i;
//	for (i = 0; i < 10; i++) {
//	  str += chars[Math.floor(Math.random() * chars.length)];
//	}
//	return str;
//}

// TWORZENIE NOWYCH EGZEMPLARZY KOLUMN
//var todoColumn = new Column('Do zrobienia');
//var doingColumn = new Column('W trakcie');
//var doneColumn = new Column('Skończone');

// DODAWANIE KOLUMN DO TABLICY
//board.createColumn(todoColumn);
//board.createColumn(doingColumn);
//board.createColumn(doneColumn);

// TWORZENIE NOWYCH EGZEMPLARZY KART
//var card1 = new Card('Nowe zadanie');
//var card2 = new Card('stworzyc tablice kanban');

// DODAWANIE KART DO KOLUMN
//todoColumn.createCard(card1);
//doingColumn.createCard(card2);