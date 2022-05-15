window.addEventListener('load', function(e) {
	console.log('document loaded')
	init();
})

function init() {
	document.findTradeForm.lookup.addEventListener('click', function(e) {
		e.preventDefault();
		let tradeId = document.findTradeForm.tradeId.value;
		if (!isNaN(tradeId) && tradeId > 0) {
			getTrade(tradeId);
		}
	});
	document.createTrade.createTradeSubmit.addEventListener('click', createTrade);
	let detailedViewdiv = document.getElementById("detailedView");
	detailedViewdiv.style.display = "none";

	getAllTrades();
}

function getAllTrades() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/trades');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let trades = JSON.parse(xhr.responseText);
				displayAllTrades(trades);
				totals(trades);
			}
			else {
				console.log('Film not found.')
			}
		}
	};
	xhr.send();
}



function getTrade(tradeId) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/trades/' + tradeId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let trade = JSON.parse(xhr.responseText);
				console.log(trade);
				displayTrade(trade);
			}
			else {
				console.log('Film not found.')
			}
		}
	};

	xhr.send();
}

function displayTrade(trade) {
	let tradeDiv = document.getElementById('tradeData')
	tradeDiv.textContent = '';

	let h1 = document.createElement('h1');
	h1.textContent = "Trade Status: " + trade.status;
	tradeDiv.appendChild(h1);

	let ul = document.createElement('ul');

	let liShares = document.createElement('li');
	let liPricePerShare = document.createElement('li');
	//let liDescription = document.createElement('li');
	//let liProfitAndLoss = document.createElement('li');

	liShares.textContent = "Shares: " + trade.shares;
	liPricePerShare.textContent = "Price per Share: $" + trade.price;
	ul.appendChild(liShares);
	ul.appendChild(liPricePerShare);

	if (trade.description != null) {
		let liDescription = document.createElement('li');
		liDescription.textContent = trade.description;
		ul.appendChild(liDescription);
	}



	tradeDiv.appendChild(ul);
}

function displayAllTrades(trades) {
	let tableBody = document.getElementById('tbody');
	//tablesBody reset
	tableBody.textContent = '';
	trades.forEach((trade, i) => {
		let tr = document.createElement('tr');
		tr.addEventListener('click', showDetailedView)

		let td_Id = document.createElement('td');
		let td_status = document.createElement('td')
		let td_shares = document.createElement('td');
		let td_PricePerShare = document.createElement('td');
		let td_description = document.createElement('td');
		let td_pl = document.createElement('td');

		if (trade.description != null) {
			td_description.textContent = trade.description;
		}
		if (trade.pAndl != null) {
			td_pl.textContent = trade.pAndl + '%';
		}

		td_Id.textContent = trade.id;
		td_status.textContent = trade.status;
		td_shares.textContent = trade.shares;
		td_PricePerShare.textContent = trade.price;

		tr.appendChild(td_Id)
		tr.appendChild(td_status)
		tr.appendChild(td_shares);
		tr.appendChild(td_PricePerShare);
		tr.appendChild(td_description);
		tr.appendChild(td_pl);

		tableBody.appendChild(tr);

	})
}

function createTrade(e) {
	e.preventDefault();
	let newTrade = {
		status: document.createTrade.status.value,
		shares: document.createTrade.shares.value,
		price: document.createTrade.pricePer.value,
		description: document.createTrade.description.value,
		pAndl: document.createTrade.profitloss.value
	}

	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/trades', true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) {
				// * On success, if a response was received parse the film data
				//   and pass the film object to displayActors().
				let trade = JSON.parse(xhr.responseText);
				displayTrade(trade);
				getAllTrades();
			}
			else {
				// * On failure, or if no response text was received, put "Film not found" 
				//   in the filmData div.
				console.error("POST request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};
	xhr.send(JSON.stringify(newTrade));

}

function showDetailedView(e) {
	//console.log(window.location.href = "http://localhost:8082/detailview");
	let detailedViewdiv = document.getElementById("detailedView");
	detailedViewdiv.style.display = "block";
	let tradeId = e.target.parentElement.firstElementChild;
	//get the trade and display it in detailedViewdiv
	let h2 = document.getElementById('updateTradeH2');

	let children = e.target.parentElement.children;


	let firstElement = e.target.parentElement.firstElementChild;
	h2.textContent = "Trade ID: " + firstElement.textContent;
	let updateStatus = document.getElementById('UpdateStatus');
	let updateShares = document.getElementById('updateshares');
	let updatePrice = document.getElementById('updatepricePer');
	let updateDescription = document.getElementById('updatedescription');
	let updatePL = document.getElementById('updateprofitloss');

	document.updateTrade.tradeId.value = children[0].textContent;
	updateStatus.value = children[1].textContent;
	updateShares.value = children[2].textContent;
	updatePrice.value = children[3].textContent;
	updateDescription.value = children[4].textContent;
	updatePL.value = children[5].textContent;

	let updateSubmit = document.getElementById('updateTradeSubmit');
	updateSubmit.addEventListener('click', updateTrade)

	let deleteSubmit = document.getElementById('deleteTradeSubmit');
	deleteSubmit.addEventListener('click', deleteTrade)

}

function updateTrade(e) {
	let tradeId = document.updateTrade.tradeId.value;
	e.preventDefault()
	let detailedViewdiv = document.getElementById("detailedView");
	detailedViewdiv.style.display = "none";
	//for now user id will be one
	let userId = 1;

	let newTrade = {
		status: document.updateTrade.status.value,
		shares: document.updateTrade.shares.value,
		price: document.updateTrade.price.value,
		description: document.updateTrade.description.value,
		pAndl: document.updateTrade.profitloss.value.slice(0, document.updateTrade.profitloss.value.length - 1),
	}

	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/users/' + userId + '/trade/' + tradeId, true);
	xhr.setRequestHeader("content-type", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) {
				// * On success, if a response was received parse the film data
				//   and pass the film object to displayActors().
				let trade = JSON.parse(xhr.responseText);
				displayTrade(trade);
				getAllTrades();
			}
			else {
				console.error("PUT request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};
	xhr.send(JSON.stringify(newTrade));
}

function deleteTrade(e) {
	e.preventDefault();
	console.log(document.updateTrade.tradeId.value);
	let tradeId = document.updateTrade.tradeId.value;

	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/trades/' + tradeId, true);
	xhr.setRequestHeader("content-type", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) {
				location.reload();
				//getAllTrades();
			}
			else {
				console.error("PUT request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};
	xhr.send();
}

function totals(trades){
	let totalPL = document.getElementById('totalP&L') 
	let totalInvest = document.getElementById('totalinvested');
	totalPL.textContent = "Overall P&L: "
	totalInvest.textContent = "Total: "
	
	
	
	let pl=0;
	let total=0;
	
	for(let i = 0; i <trades.length;i++){
		let tradeValue = trades[i].shares*trades[i].price
		pl += trades[i].pAndl
		total += tradeValue + (tradeValue)*trades[i].pAndl
	}
	totalPL.textContent += pl + '%';
	totalInvest.textContent += '$'+total.toLocaleString(undefined);
}


