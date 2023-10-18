let showList = [];
let hideList = [];

const galleryList = [
  {
    name: 'Pizza',
    price: 55.55,
    img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80',
    type: ['lunch', 'dinner'],
  },
  {
    name: 'Baked Pancakes',
    price: 35.55,
    img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80',
    type: ['desserts'],
  },
  {
    name: 'Blueberry Toast',
    price: 25.55,
    img: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80',
    type: ['breakfast', 'lunch'],
  },
  {
    name: 'Beefsteak',
    price: 75.55,
    img: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    type: ['lunch', 'dinner'],
  },
  {
    name: 'Sandwich',
    price: 55.55,
    img: 'https://images.unsplash.com/photo-1554433607-66b5efe9d304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    type: ['breakfast', 'lunch'],
  },
  {
    name: 'Strawberry Waffle',
    price: 35.55,
    img: 'https://images.unsplash.com/photo-1558584724-0e4d32ca55a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
    type: ['desserts'],
  },
  {
    name: 'Hamburger',
    price: 25.55,
    img: 'https://images.unsplash.com/photo-1624855600799-ac8e8bddd1da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    type: ['breakfast', 'lunch', 'dinner'],
  },
  {
    name: 'Chocolate Cake',
    price: 55.55,
    img: 'https://images.unsplash.com/photo-1626197031507-c17099753214?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    type: ['desserts'],
  },
]

class Gallery {
  constructor(name, price, img, type) {
    this.name = name;
    this.price = price;
    this.img = img;
    this.type = type;
  }
  createCard() {
    const card = `<li class="card" data-type="${this.type.join()}">
        <div class="card-wrap">
          <a class="btn-modal" href="">
            <div class="card-img">
              <img src="${this.img}" alt="">
            </div>
            <div class="card-txt">
              <strong>${this.name}</strong>
              <em>One Dish - $${this.price}</em>
            </div>
          </a>
        </div>
      </li>`
    
     $('.gallery').append(card);
  }
}

const modal = {
  open(e) {
    e.preventDefault();
  
    const idx = $(this).closest('.card').index();
    const title = $('.btn-filter.current').data('type') === 'all' ? '' : $('.btn-filter.current').text();
  
    $('body').css({ overflowY: 'hidden' });
    $('.modal').fadeIn();
    $('.modal').data('idx', idx);
    $('.modal-title').text(title);
    $('.modal-img').attr('src', galleryList[idx].img);
  },
  close() {
    $('body').css({ overflowY: '' });
    $('.modal').fadeOut();
    $('.modal-title').text('');
  },
  prev() {
    const galleryIdx = $('.modal').data('idx');
    const showListIdx = showList.indexOf(galleryIdx);
    let prevIdx = showListIdx > 0 ? showListIdx - 1 : showList.length - 1;
        prevIdx = showList[prevIdx];

    $('.modal').data('idx', prevIdx);
    $('.modal-img').attr('src', galleryList[prevIdx].img);
  },
  next() {
    const galleryIdx = $('.modal').data('idx');
    const showListIdx = showList.indexOf(galleryIdx);
    let nextIdx = showListIdx < showList.length - 1 ? showListIdx + 1 : 0;
        nextIdx = showList[nextIdx];

    $('.modal').data('idx', nextIdx);
    $('.modal-img').attr('src', galleryList[nextIdx].img);
  }
}

const showGallery = (delay) => {
  const windowWidth = $(window).innerWidth();
  const galleryWidth = $('.gallery').innerWidth();
  let cols;
  if (windowWidth > 1200) cols = 4;
  else if (windowWidth > 900) cols = 3;
  else if (windowWidth > 600) cols = 2;
  else cols = 1;
  const rows = Math.ceil(showList.length/cols);
  const width = galleryWidth / cols;
  const height = width * 0.65;

  let cnt = -1;
  for (let rowIdx = 0; rowIdx < rows; rowIdx++) {
    for (let colIdx = 0; colIdx < cols; colIdx++) {
      cnt++;
      if (cnt >= showList.length) break;
      
      $('.card').eq(showList[cnt]).show().stop().animate({
        top: height * rowIdx,
        left: width * colIdx,
        width: width,
        height: height
      }, delay || 0, function() {
        $(this).addClass('show');
      })
    }
  }
}

const loadGallery = () => {
  galleryList.forEach((v, i) => {
    let gallery = new Gallery(...Object.values(v));
    
    gallery.createCard();
    showList.push(i);
  });

  showGallery();
  $('.btn-modal').on('click', modal.open);
}

function clickFilterButton() {
  const type = $(this).data('type');

  $('.btn-filter').removeClass('current');
  $(this).addClass('current');
  
  showList.length = 0;
  hideList.length = 0;

  $('.card').each((i, v) => {
    const typeList = $(v).data('type').split(',');

    if (type === 'all') showList.push(i);
    else typeList.find(v => v === type) ? showList.push(i) : hideList.push(i);
  }).removeClass('show');

  hideList.forEach(v => $('.card').eq(v).hide());
  showGallery(300);
}

function clickModalButton(e) {
  const type = $(this).data('type');

  modal[type]();
}

loadGallery();
$('.btn-filter').on('click', clickFilterButton);
$('.modal-btn').on('click', clickModalButton);
$(window).resize(() => showGallery(300));