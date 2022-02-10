<style>
    .frosmo-elevator {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        z-index: 99999999;
    }
    
    .frosmo-elevator .frosmo-backdrop {
        position: fixed;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        z-index: 9999;
        display:none;
    }
    
    .frosmo-elevator button, .frosmo-elevator h4, .frosmo-elevator h5 {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 14px;
    }
    
    .frosmo-elevator h4, .frosmo-elevator h5 {
        color: black;
    }

    .frosmo-elevator .frosmo-2424-button-container {
        bottom: 150px;
        background: #159C47 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 12px #00000026;
        border-radius: 16px 0px 0px 16px;
        color: white;
        position: fixed;
        right: 0;
        height: 70px;
        min-width: 80px;
        display: flex;
        align-items: center;
        z-index: 99999998;
        transition: all 1s;
    }

    .frosmo-elevator .frosmo-2424-button-container:hover {
        background-color: #0A7E35;
        height: 80px;
        min-width: 90px;
        transition: all .05s ease-in-out;
        padding-right: 10px;
    }

    .frosmo-elevator .frosmo-2424-button-container::after {
        content: '';
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="25" version="1.1"><line x1="0" x2="10" y1="1" y2="1" stroke="white"/><line x1="0" x2="10" y1="12" y2="12" stroke="white"/><line x1="0" x2="10" y1="24" y2="24" stroke="white"/></svg>');
        background-repeat: no-repeat;
        background-size: 10px;
        width:10px;
        height: 25px;
        position: absolute;
        right: 0;
    }

    .frosmo-elevator .frosmo-2424-button-container button {
        height: 100%;
        width: 100%;
        background: transparent;
        border: none;
        cursor: pointer;
        margin: 0;
        color: white;
        font-size: 14px;
        text-transform: none;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 10px;
        font-weight: normal;
    }
    .frosmo-elevator .frosmo-2424-button-container button:hover {
        /*padding-right: 5px;*/
    }
    .frosmo-elevator .frosmo-2424-button-container button:focus {
        outline: none;
    }
    
    .frosmo-elevator .frosmo-2424-button-container button span {
        margin: 0 10px 0 10px;
        max-width: 100px;
    }

    .frosmo-elevator .frosmo-2424-button-container button.frosmo-2424-button-open {
        width:100%;
        height: 100%;
    }
    .frosmo-elevator .frosmo-2424-button-container button.frosmo-2424-button-open::before {
        content: '';
        background: 113% 1% url("data:image/svg+xml,<svg width='300' height='300' xmlns='http://www.w3.org/2000/svg'><path fill='white' d='M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z'/></svg>");
        background-repeat: no-repeat;
        background-size: 24px;
        width: 30px;
        height: 24px;
        display: block;
        -webkit-transform: rotate(225deg);
        -moz-transform: rotate(225deg);
        -ms-transform: rotate(225deg);
        -o-transform: rotate(225deg);
        transform: rotate(225deg);
    }

    .frosmo-elevator .frosmo-2424-button-container button.frosmo-2424-button-close {
        display: none;
    }
    .frosmo-elevator .frosmo-2424-button-container button.frosmo-2424-button-close::before {
        content: "\00d7";
        color: white;
        font-size: 34px;
        text-align: center;
        width: 100%;
        display: block;
    }

    .frosmo-elevator .frosmo-2424-button {
        cursor: pointer;
        background-color: #159C47;
    }

    .frosmo-elevator .frosmo-2424-modal {
        position: fixed;
        bottom: 150px;
        right: 120px;
        background-color: white;
        box-shadow: 0px 3px 12px #00000026;
        border: 1px solid #159C47;
        border-radius: 16px;
        display: none;
        flex-direction: column;
        justify-content: space-between;
        padding: 25px;
        min-width: 400px;
        max-width: 500px;
        z-index: 9999999;
    }

    .frosmo-elevator .frosmo-2424-modal a {
        text-decoration: none;
        color: #159C47;
        font-size: 14px;
        font-weight: normal;
    }

    .frosmo-elevator .frosmo-2424-modal a:hover {
        text-decoration: underline;
    }

    .frosmo-elevator .frosmo-2424-modal-header {
        display: flex;
        align-items: center;
    }

    .frosmo-elevator .frosmo-2424-modal-header h4 {
        margin: 0;
        font-size: 14px;
    }
    .frosmo-elevator .frosmo-2424-modal-header::before {
        content: '';
        background: center center url("data:image/svg+xml,<svg width='300' height='300' xmlns='http://www.w3.org/2000/svg'><path fill='white' d='M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z'/></svg>");
        background-repeat: no-repeat;
        background-color: #159C47;
        background-size: 12px;
        box-sizing: initial;
        width: 15px;
        height: 15px;
        padding: 7px;
        margin-right: 10px;
        display: block;
        border-radius: 50%;
        -webkit-transform: rotate(225deg);
        -moz-transform: rotate(225deg);
        -ms-transform: rotate(225deg);
        -o-transform: rotate(225deg);
        transform: rotate(225deg);
    }

    .frosmo-elevator .frosmo-2424-modal-content {
        padding: 10px 0 20px 0;
    }

    .frosmo-elevator .frosmo-2424-modal-content h5 {
        margin: 20px 0 10px 0;
    }

    .frosmo-elevator .frosmo-2424-modal-content ul {
        margin: 0;
        padding: 0 0 0 20px;
        list-style: none;
    }

    .frosmo-elevator .frosmo-2424-modal-content li:before {
        content: '\203A';
        font-size: 20px;
        margin-left: -20px;
        margin-right: 10px;
    }

    .frosmo-elevator .frosmo-2424-modal-footer .logo-image {
        max-width: 200px;
        max-height: 30px;
    }

    @media (max-width: 600px), (max-height: 600px) {
        .frosmo-elevator .frosmo-2424-button-container {
            bottom: 95px;
        }

        .frosmo-elevator .frosmo-2424-modal {
            left: 2%;
            right: 2%;
            bottom: 180px;
            min-width: 200px;
        }
    }
    
    @media (max-height: 600px) {
        .frosmo-elevator .frosmo-2424-modal-content {
            max-height: 240px;
            overflow-y: scroll;
        }
    }
    
    /**
     * hide texts meant for screenreaders only
     */
    .screen-reader-only {
        clip: rect(1px,1px,1px,1px);
        position: absolute!important;
        overflow: hidden;
    }
    
    @media screen and (max-width: 600px) {
    .frosmo-elevator .frosmo-2424-modal-content h5 {
        margin: 5px 0 5px 0;
        }
    .frosmo-2424-modal-content li{
        line-height: 1;
    }
    }
    
.highcharts-figure,
    .highcharts-data-table table {
    min-width: 320px;
    max-width: 500px;
    margin: 1em auto;
}

    #container {
    height: 350px;
    }

.highcharts-data-table table {
    font-family: Verdana, sans-serif;
    border-collapse: collapse;
    border: 1px solid #ebebeb;
    margin: 10px auto;
    text-align: center;
    width: 100%;
    max-width: 500px;
}

.highcharts-data-table caption {
    padding: 1em 0;
    font-size: 1.2em;
    color: red;
}

.highcharts-data-table th {
    font-weight: 600;
    padding: 0.5em;
}

.highcharts-data-table td,
.highcharts-data-table th,
.highcharts-data-table caption {
    padding: 0.5em;
}

.highcharts-data-table thead tr,
.highcharts-data-table tr:nth-child(even) {
    background: #f8f8f8;
}

.highcharts-data-table tr:hover {
    background: #f1f7ff;
}

</style>
<div class="frosmo-elevator">
    <div class="frosmo-backdrop"></div>
    <div class="frosmo-2424-button-container">
        <button tabindex="1" class="frosmo-2424-button-open">
            <span tabindex="1" {{^buttonTextOpenVisible}}class="screen-reader-only"{{/buttonTextOpenVisible}}>
                {{buttonTextOpen}}
            </span>
        </button>
        <button class="frosmo-2424-button-close">
            <span tabindex="1" {{^buttonTextCloseVisible}} class="screen-reader-only"{{/buttonTextCloseVisible}}>
                {{buttonTextClose}}
            </span>
        </button>
    </div>
    <div class="frosmo-2424-modal">
        <div class="frosmo-2424-modal-header">
            <h4>Super affinity</h4>
        </div>
        <div class="frosmo-2424-modal-content">
            


<figure class="highcharts-figure">
    <a href="/?affinity=true"><div id="container"></div></a>
</figure>
        </div>
    </div>
</div>
<script>
var instance = positionData.getMessageInstance();
    instance.setDisplayed();
    instance.setTrackable(false);
var $backdrop = document.querySelector('.frosmo-elevator .frosmo-backdrop');
var $closeButton = document.querySelector('.frosmo-elevator .frosmo-2424-button-close');
var $openButton = document.querySelector('.frosmo-elevator .frosmo-2424-button-open');
var $modal = document.querySelector('.frosmo-elevator .frosmo-2424-modal');
var $modalContent = document.querySelector('.frosmo-elevator .frosmo-2424-modal-content');
var $buttonSpan = document.querySelector('.frosmo-elevator .frosmo-2424-button-open span');

$openButton.addEventListener('click', showForm);
$closeButton.addEventListener('click', hideForm);
$backdrop.addEventListener('click', hideForm);
getAndRenderRecommendations();

function changeButtonView () {
    if($buttonSpan && easy.utils.isMobile()){
        $buttonSpan.style.display = 'none'
    }
}

setTimeout(changeButtonView , 3000)


function showForm() {
    var instance = positionData.getMessageInstance();
    instance.setTrackable(true);
    instance.startTrueDisplayTracking();
    var $theOtherButton = document.querySelector('.frosmo-vn .frosmo-2424-button-container');
    if($theOtherButton) {
        $theOtherButton.style.right = '-200px';
    }
    $modal.style.display = 'flex';
    $closeButton.style.display = 'flex';
    $openButton.style.display = 'none';
    $backdrop.style.display = 'block';
    
    var instance = positionData.getMessageInstance();
    instance.setTrueDisplayed();
}

function hideForm() {
    var $theOtherButton = document.querySelector('.frosmo-vn .frosmo-2424-button-container');
    if($theOtherButton) {
        $theOtherButton.style.right = '0';
    }
    $modal.style.display = 'none';
    $closeButton.style.display = 'none';
    $openButton.style.display = 'flex';
    $backdrop.style.display = 'none';
}

/**
 * Utility function
 * Convert string to camel case
 **/
function toSnakeCase(str) {
  return str.toLowerCase().replace(/\s/g, '_');
}

</script>

<script async="false" src="https://code.highcharts.com/highcharts.js">
</script>

<script > 

const gameList = {{{gameString}}};

const gameListBrand = gameList[0].value.map(item => {
  return [item.name, item.score]
})

const gameListType = gameList[1].value.map(item => {
  return [item.name, item.score]
});

function waitChart(){
    if(window.Highcharts){
        displayChart()
    }
    else {
        setTimeout(waitChart, 100)
    }
}

setTimeout(waitChart, 100);

function displayChart () {

  Highcharts.chart('container', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      text: `Affinity by ${gameList[1].id}.`,
      verticalAlign: 'middle',
      X: 20,
      y: 185,
      style: {
        'color': 'black',
        'font-size': '18px'
      }
    },
    subtitle: {
      text: `Affinity by ${gameList[0].id}.`,
      verticalAlign: 'middle',
      y: 0,
      style: {
        'color': 'black',
        'font-size': '18px'
      }
    },

    tooltip: {
      pointFormat: '<b>{point.percentage:.1f}%</b>'
    },
    
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -20,
          style: {
            fontWeight: 'normal',
            fontsize: '12px'
          },
        },
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '65%'],
        size: '80%'
      }
    },
    series: [{
        type: 'pie',
        name: 'Brand',
        innerSize: '50%',
        center: ['50%', '35%'],
        data: gameListBrand
      },
      {
        type: 'pie',
        name: 'Type',
        innerSize: '50%',
        center: ['50%', '100%'],
        data: gameListType
      }
    ]
  });
}

</script>