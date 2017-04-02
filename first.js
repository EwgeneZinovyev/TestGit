var taskVariables = {
  x: 0,
  y: 0,
  z: 0,
};

$(document).ready(function() {
  generateTask();
  renderTask();
  bindEvents();
  step1();
});

function step1() {
  drawArc(0, taskVariables.x);
}

function doSmth($input, currentValue, $displayValue, funStep) {
  var inputValue = parseInt($input.val(), 10);

  if (inputValue !== currentValue) {
    $input.addClass('input-error'); 
    $displayValue.addClass('text-error');
  } else {
    $displayValue.removeClass('text-error');
    funStep();
  }	  
}

function bindEvents() {
  var $inputFirst = $('.first');
  var $inputSecond = $('.second');
  var $inputThird = $('.third');
  
  $inputFirst.keyup(function() {
    var $displayValue = $('.task > div:nth-child(1)'); 
    doSmth($(this), taskVariables.x, $displayValue, step2);
  });
  
  $inputSecond.keyup(function() {
    var $displayValue = $('.task > div:nth-child(3)'); 
    doSmth($(this), taskVariables.y, $displayValue, step3);
  });
  
  $inputThird.keyup(function() {
    var $displayValue = $('.task > div:nth-child(5)'); 
    doSmth($(this), taskVariables.z, $displayValue, step4);
  });
}

function step2() {
  $('.first').hide();
  $('.input-first-container .text').text(taskVariables.x);
  $('.second').show();
  drawArc(taskVariables.x, taskVariables.z);
}

function step3() {
  $('.second').hide();
  $('.input-second-container .text').text(taskVariables.y);
  $('.task > div:nth-child(5)').hide();
  $('.third').show();
}

function step4() { 
  $('.third').hide();
  $('.task > div:nth-child(5)').show().text(taskVariables.z);
}

function drawArc(startValue, endValue) {
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  var stepValue = canvas.width / 22.5;

  var centerValue = (stepValue * (((endValue - startValue) / 2) + 1 + startValue));
  var radius = ((endValue - startValue) / 2) * stepValue;
  context.beginPath();
  context.arc(centerValue, canvas.height, radius, Math.PI, 0, false);
  context.lineWidth = 2;
  context.strokeStyle = 'red';
  context.stroke();
}

function generateTask() {
  taskVariables.x = randomInteger(6, 9);
  taskVariables.z = randomInteger(11, 14);
  taskVariables.y = taskVariables.z - taskVariables.x;
}

function renderTask() {
  var array = getTaskArray();

  for(var i = 0; i < array.length; i++) {
    var text = array[i];
    var $div = $('<div>', {
      'class': 'task-block',
    });
    $div.text(text);
    $('.task').append($div);
  }
}

function getTaskArray() {
  var array = [
    taskVariables.x,
    '+',
    taskVariables.y,
    '=',
    '?'
  ];

  return array;
}

function randomInteger(min, max) {
  var a = min + Math.random() * (max + 1 - min);
  a = Math.floor(a);
  return a;
}

