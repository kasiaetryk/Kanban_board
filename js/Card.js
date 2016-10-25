// KLASA KANBAN CARD
function Card(id, name, bootcamp_kanban_column_id) {
	var self = this;
	this.id = id;
	this.name = name || 'Nie podano nazwy';
	this.bootcamp_kanban_column_id = bootcamp_kanban_column_id;
	this.element = createCard();

	function createCard() {
		var card = $('<li class="card" ></li>');
		var cardDeleteBtn = $('<button class="btn-delete-card fa fa-times"></button>');
		var cardDescription = $('<p class="card-description" id="' + self.id + '"></p>');
		var modCard = $('<button class="btn-delete-card fa fa-cog"></button>')
		cardDeleteBtn.click(function(){
			self.removeCard();
		});
		modCard.click(function(){
			self.changeText();

		});

		card.append(cardDeleteBtn);
		card.append(modCard);
		cardDescription.text(self.name);
		card.append(cardDescription);
		
		return card;
	}
}
Card.prototype = {
	removeCard: function() {
		var self = this;
		$.ajax({
			url: baseUrl + '/card/' + self.id,
			method: 'DELETE',
			success: function(){
				self.element.remove();
			}
		});
	},
	changeText: function() {
		var self = this;
		var newText = prompt('Wpisz nowy tekst');
		$.ajax({
			url: baseUrl + '/card/' + self.id,
			method: 'PUT',
			data: {
				id: self.id,
				name: newText,
				'bootcamp_kanban_column_id': self.bootcamp_kanban_column_id
			},
			success: function(){
				self.name = newText;
				document.getElementById(self.id).innerHTML = self.name;
			}
		});


	}

}