function randArray(num, sum, digits) {

// brief: 获取随机整数 [min, max]
function random(min, max) {
  const range = max - min;
  const rand = Math.round(Math.random() * range);
  return min + rand;
}

// brief: 消除最小值和最大值
function smooth(min, max, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!(min < arr[i] && arr[i] < max)) {
      continue
    }
    for (let j = 0; j < arr.length; j++) {
        // 消除最小值
        if (arr[j] === min) {
          let rm = Math.floor((arr[i] - min)/10)
          arr[i] -= rm
          arr[j] += rm
          break
        }
        // 消除最大值
        if (arr[j] === max) {
          let rm = Math.floor((max - arr[i])/10)
          arr[i] += rm
          arr[j] -= rm
          break
        }
    }
  }
}

// brief: 打乱数组顺序
function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5);
}

// brief: 生成随机整数数组
function randnum(min, max, num, sum) {
  // step 1 检查参数
  if (min <= 0 || max <= 0 || num <= 0 || sum <= 0) {
    return [];
  }
  if (!(min * num <= sum && sum <= max * num)) {
    return [];
  }

  // step 2 将 num 个在 min 填入数组
  var arr = new Array(num).fill(min);
  
  // step 3 循环随机生成[0, max-min]加到最小值数组
  let leftTotal = parseInt(sum - min*num);
  LABEL:
  while(true) {
    for (let i = 0; i < num; i++) {
        let rand = random(0, parseInt(max-min));
        // 如果随机数大于剩余金额，则取剩余金额作为随机数
        if (rand > leftTotal) {
            rand = leftTotal;
        }
        // 如果累加值大于最大值，则取最大值与原值差值作为随机数
        if (arr[i] + rand > max) {
            rand = max - arr[i];
        }
        arr[i] += rand;
        leftTotal -= rand;
        if (leftTotal === 0) {
            break LABEL;
        }
    }
  }
  
  // step 4 消除大部分最小值和最大值
  smooth(min, max, arr)
  
  // step 5 打乱数组顺序
  shuffle(arr)
  
  return arr;
}

  if(num == 1) return [sum.toFixed(digits)]

  var ave=sum/num
  var arr = randnum(ave/3, ave*3, num, sum)
  for(var i=0; i<arr.length; i++) {
     arr[i] = arr[i].toFixed(digits)
  }
  return arr
}

