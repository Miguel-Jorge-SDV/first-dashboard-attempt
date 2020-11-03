var ctx = document.getElementById('linha').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
        datasets: [{
            label:"Reais por dia",
            data: [250,1145,785,950,555,1145,620],
            backgroundColor: 'transparent',
            borderColor: 'rgb(127,255,0)',
            borderWidth: 5
        }]
    },

    options: {
        title: {
            display: true,
            fontSize: 20,
            text: "Valor financeiro obtido com as reservas da quadra"
        },
    labels: {
        fontStyle: "bold"

    }},
});

var ctx = document.getElementById('barra').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',

    data: {
        labels: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
        datasets: [{
            label:"Reservas diarias",
            data: [2,9,6,7,5,9,5],
            backgroundColor: 'rgb(0,255,127)',
            borderColor: 'rgb(0,255,127)',
            borderWidth: 1
        }]
    },

    options: {
        title: {
            display: true,
            fontSize: 20,
            text: "Reservas feitas na semana"
        },
    labels: {
        fontStyle: "bold"

    }},
});

function calc(hd) {
    var horaDisponivel = 16, HoraReservada = 6;
    porcentagem = (HoraReservada * 100) / horaDisponivel;
    return porcentagem;
}

var ctx = document.getElementById('pizza').getContext('2d');
var chart = new Chart(ctx, {
    type: 'pie',

    data: {
        labels: ['Horarios reservadas', 'Horarios disponiveis'],
        datasets: [{
            label:"Porcentagem nesta data",
            data: [calc(),62.5],
            borderColor: 'rgb(70,130,180)',
            backgroundColor: 'rgba(135,206,235)',
            hoverBackgroundColor: 'rgb(0,255,127)',
            hoverBorderColor: 'rgb(0,255,127)',
            hoverBorderWidth: 6,
            borderWidth: 2
        }]
    },

    options: {
        title: {
            display: true,
            fontSize: 20,
            text: "Porcentagem de reservas feitas na quadra"
        },
    labels: {
        fontStyle: "bold"

    }},
});