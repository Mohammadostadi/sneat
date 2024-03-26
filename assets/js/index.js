var showEye1 = document.getElementById('show-eye');
var hideEye = document.getElementById('hide-eye');
var index = 1

function showEye(){
    if(index % 2 == 1){
        showEye1.classList.remove('d-none')
        hideEye.classList.add('d-none')
    }else{
        showEye1.classList.add('d-none')
        hideEye.classList.remove('d-none')
    }

    index += 1
}

var popUps = document.getElementById('pop-ups');
var AvatarImg = document.getElementById('avatars-img')

function showPopUp(){
        popUps.classList.add("show")
        AvatarImg.classList.add("z-index-1")
    }
    
    function closePopUp(){
        popUps.classList.remove("show")
        AvatarImg.classList.remove("z-index-1")
}



var account = document.getElementById('account');
  var linkAccount = document.getElementById('link-account');
  var security = document.getElementById('security');
  var linkSecurity = document.getElementById('link-security');
  var notification = document.getElementById('notification');
  var linkNotification = document.getElementById('link-notification');

  function showAccount(){
    account.classList.add('active-div');
    security.classList.add('non-active-div');
    notification.classList.add('non-active-div');
    linkAccount.classList.add('active-link');
    linkSecurity.classList.add('non-active-link');
    linkNotification.classList.add('non-active-link');
    account.classList.remove('non-active-div');
    security.classList.remove('active-div');
    notification.classList.remove('active-div');
    linkAccount.classList.remove('non-active-link');
    linkSecurity.classList.remove('active-link');
    linkNotification.classList.remove('active-link');
  }
  function showSecurity(){
    account.classList.add('non-active-div');
    security.classList.add('active-div');
    notification.classList.add('non-active-div');
    linkAccount.classList.add('non-active-link');
    linkSecurity.classList.add('active-link');
    linkNotification.classList.add('non-active-link');
    account.classList.remove('active-div');
    security.classList.remove('non-active-div');
    notification.classList.remove('active-div');
    linkAccount.classList.remove('active-link');
    linkSecurity.classList.remove('non-active-link');
    linkNotification.classList.remove('active-link');
  }
  function showNotification(){
    account.classList.add('non-active-div');
    security.classList.add('non-active-div');
    notification.classList.add('active-div');
    linkAccount.classList.add('non-active-link');
    linkSecurity.classList.add('non-active-link');
    linkNotification.classList.add('active-link');
    account.classList.remove('active-div');
    security.classList.remove('active-div');
    notification.classList.remove('non-active-div');
    linkAccount.classList.remove('active-link');
    linkSecurity.classList.remove('active-link');
    linkNotification.classList.remove('non-active-link');
  }



  var income = document.getElementById('income');
  var incomeLink = document.getElementById('income-link');
  var expense = document.getElementById('expense');
  var expenseLink = document.getElementById('expense-link');
  var profit = document.getElementById('profit');
  var profitLink = document.getElementById('profit-link');


  function showIncome(){
    income.classList.add('active-div');
    expense.classList.add('non-active-div');
    profit.classList.add('non-active-div');
    incomeLink.classList.add('active-link-index');
    expenseLink.classList.add('non-active-link-index');
    profitLink.classList.add('non-active-link-index');
    income.classList.remove('non-active-div');
    expense.classList.remove('active-div');
    profit.classList.remove('active-div');
    incomeLink.classList.remove('non-active-link-index');
    expenseLink.classList.remove('active-link-index');
    profitLink.classList.remove('active-link-index');
  }


  function showExpense(){
    income.classList.add('non-active-div');
    expense.classList.add('active-div');
    profit.classList.add('non-active-div');
    incomeLink.classList.add('non-active-link-index');
    expenseLink.classList.add('active-link-index');
    profitLink.classList.add('non-active-link-index');
    income.classList.remove('active-div');
    expense.classList.remove('non-active-div');
    profit.classList.remove('active-div');
    incomeLink.classList.remove('active-link-index');
    expenseLink.classList.remove('non-active-link-index');
    profitLink.classList.remove('active-link-index');
  }


  function showProfit(){
    income.classList.add('non-active-div');
    expense.classList.add('non-active-div');
    profit.classList.add('active-div');
    incomeLink.classList.add('non-active-link-index');
    expenseLink.classList.add('non-active-link-index');
    profitLink.classList.add('active-link-index');
    income.classList.remove('active-div');
    expense.classList.remove('active-div');
    profit.classList.remove('non-active-div');
    incomeLink.classList.remove('active-link-index');
    expenseLink.classList.remove('active-link-index');
    profitLink.classList.remove('non-active-link-index');
  }
  



document.addEventListener('DOMContentLoaded', function (){
    const chart = Highcharts.chart('chart', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'کل درآمد'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            column: {
                borderRadius: '35%'
            }
        },
        series: [{
            name: '2022',
            data: [-13, -18, -9, -14, -5, -17, -15]
        }, {
            name: '2023',
            data: [18, 7, 15, 29, 18, 12, 9]
        }]
    });
})



var options = {
    series: [67],
    chart: {
    height: 350,
    type: 'radialBar',
    offsetY: -10
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: {
          fontSize: '16px',
          color: undefined,
          offsetY: 120
        },
        value: {
          offsetY: 76,
          fontSize: '22px',
          color: undefined,
          formatter: function (val) {
            return val + "%";
          }
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
        shade: 'dark',
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91]
    },
  },
  stroke: {
    dashArray: 4
  },
  labels: ['Median Ratio'],
  };

  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  chart.render();




 /*  var options = {
    series: [44, 55, 41, 17],
    chart: {
    type: 'donut',
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#chart3"), options);
  chart.render(); */

  /* document.addEventListener('DOMContentLoaded', function (){
    
  }) */






  
  