(() => {
  const state = {
    runnig: true,
    data: [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ],
    rounds: []
  };

  const toggleRound = () => {
    state.rounds.push(state)

    if (state.rounds.length % 2 === 0) {
      return 'O';
    }

    return 'X';
  };

  const drawState = () => {
    document.querySelectorAll('tr').forEach((row, i) => {
      row.querySelectorAll('th').forEach((col, j) => {
        col.innerText = state.data[i][j];
      })
    })
    check()
  };
  
  document.querySelectorAll('tr').forEach((row, i) => {
    row.querySelectorAll('th').forEach((col, j) => {
      col.addEventListener('click', () => {
        if (!state.runnig) {
          return alert("Acabou já")
        }

        if (state.data[i][j] !== '') {
          return alert('Invalid');
        }
        state.data[i][j] = toggleRound();
        drawState()
      })
    })
  })

  const win = (winer) => {
    state.runnig = false
    alert(`${winer} win`)
  }

  const check = () => {
    if (
      state.data[0][0] === state.data[0][1] &&
      state.data[0][0] === state.data[0][2] &&
      state.data[0][0] !== ''
    ) {
      win(state.data[0][0])
    }

    if (
      state.data[1][0] === state.data[1][1] &&
      state.data[1][0] === state.data[1][2] &&
      state.data[1][0] !== ''
    ) {
      win(state.data[1][0])
    }

    if (
      state.data[2][0] === state.data[2][1] &&
      state.data[2][0] === state.data[2][2] &&
      state.data[2][0] !== ''
    ) {
      win(state.data[2][0])
    }

    if (
      state.data[0][0] === state.data[1][0] &&
      state.data[0][0] === state.data[2][0] &&
      state.data[0][0] !== ''
    ) {
      win(state.data[0][0])
    }      
    
    if (
      state.data[0][1] === state.data[1][1] &&
      state.data[0][1] === state.data[2][1] &&
      state.data[0][1] !== ''
    ) {
      win(state.data[0][1])
    }

    if (
      state.data[0][2] === state.data[1][2] &&
      state.data[0][2] === state.data[2][2] &&
      state.data[0][2] !== ''
    ) {
      win(state.data[0][2])
    }

    if (
      state.data[0][0] === state.data[1][1] &&
      state.data[0][0] === state.data[2][2] &&
      state.data[0][0] !== ''
    ) {
      win(state.data[0][0])
    }

    if (
      state.data[0][2] === state.data[1][1] &&
      state.data[0][2] === state.data[2][0] &&
      state.data[0][2] !== ''
    ) {
      win(state.data[0][2])
    }
  };
})();