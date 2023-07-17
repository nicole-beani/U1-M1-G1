function totaleVincitore(
    firstGiocatore: number,
    secondGiocatore: number
  ) {
    if (
      firstGiocatore < 1 ||
      firstGiocatore > 100 ||
      secondGiocatore < 1 ||
      secondGiocatore > 100
    ) {
      alert("Uno o entrambi i numeri sono minori di 1 o maggiori di 100");
    } else {
      let numRandom: number = Math.floor(Math.random() * 100 + 1);
      console.log(numRandom);
      let firstDifferenza: number = Math.abs(numRandom - firstGiocatore);
      let secondDifferenza: number = Math.abs(
        numRandom - secondGiocatore
      );
  
      if (firstDifferenza === 0) {
        console.log("Giocatore 1 ha indovinato il numero random");
      } else if (secondDifferenza === 0) {
        console.log("Giocatore 2 ha indovinato");
      } else if (firstDifferenza < secondDifferenza) {
        console.log("Giocatore 1 è il più vicino al numero Random");
      } else console.log("Giocatore 2 è il più vicino al numero Random");
    }
  }
  
  totaleVincitore(9, 19);