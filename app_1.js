const quiz = [
  {
      question:'第１問：天白公園に毎年4月中旬頃に咲く南木曽町を代表する花は？',
      answers:[
          '八重桜',
          'ミツバツツジ',
          'チューリップ',
          'ユリ'
      ],
      correct:'ミツバツツジ'
  },{
      question:'第２問：邪魔にならないように袖なしにし冷える背中だけを暖めるように工夫された南木曽町に昔から伝わる防寒着は？',
      answers:[
          'なぎそいぬ',
          'なぎそしか',
          'なにそのね',
          'なぎそねこ'
      ],
      correct:'なぎそねこ'
  },{
      question:'第３問：ご飯を少しつぶしてサワラの串につけクルミ・醤油・砂糖がベースのタレをつけて焼きます。草履型と団子型の２種類があるこの地域の名物は？。',
      answers:[
          'みたらし団子',
          '今川焼',
          '栗きんとん',
          '五平餅'
      ],
      correct:'五平餅'
  },{
      question:'第４問：日本百名橋に選ばれた木曽川に架かる南木曽町のシンボルは何でしょうか？',
      answers:[
          '桃介橋',
          '渡月橋',
          '五条大橋',
          '錦帯橋'
      ],
      correct:'桃介橋'
  },{
    question:'第５問：馬籠から妻籠まで江戸時代の雰囲気が残る旧中仙道を四季折々の美しい景色を楽しみながらウォーキングが楽しめますが、その全長は何メートルでしょうか？',
    answers:[
        '約5km',
        '約9km',
        '約22km',
        '約31km'
    ],
    correct:'約9km'
},{
  question:'第６問：長野県阿智村と岐阜県中津川市にまたがり木曽山脈の最南端に位置し日本百名山の一つでもある恵那山。その標高は何メートルでしょうか？',
  answers:[
      '標高1,185 m',
      '標高1,926 m',
      '標高2,191 m',
      '標高2,691 m'
  ],
  correct:'標高2,191 m'
},{
  question:'第７問：江戸時代に尾張藩により伐採が禁止された木曽谷の木。常緑針葉樹林の五種、ヒノキ・アスナロ・コウヤマキ・ネズコとあと一つは何でしょうか？',
  answers:[
      'ハマチ',
      'ワラサ',
      'サワラ',
      'サルサ'
  ],
  correct:'サワラ'
},{
  question:'第８問：「木曾路はすべて山の中である」の書き出しで始まる馬籠出身の文豪島崎藤村の代表作の名前は？',
  answers:[
      '夜明け前',
      '夜明けのスキャット',
      '青山半蔵',
      '島崎正樹'
  ],
  correct:'夜明け前'
},{
  question:'第９問：南木曽観光タクシーは、開業当初はわずか３台のタクシーから始まりました。営業を開始したのは昭和何年からでしょうか？',
  answers:[
      '昭和38年',
      '昭和47年',
      '昭和52年',
      '昭和58年'
  ],
  correct:'昭和47年'
},{
  question:'第１０問：それではバス事業を開始したのは、いつからでしょうか？',
  answers:[
      '昭和47年',
      '昭和58年',
      '平成5年',
      '平成12年'
  ],
  correct:'平成12年'
}
];


const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = document.getElementsByTagName('button');
//const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}