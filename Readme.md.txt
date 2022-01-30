برای تم دوستان توجه فرمایید

یک روشی که به شخصه خودم می‌پسندم استفاده از css-variable هست
دیگه حتی نیاز به کلاس جدا هم نداره. و بهتر از اون  render اضافی نداره. 

یه چیز کوچولو با چیز‌هایی که تا حالا خوندیم رو بخوایم انجام بدیم (بعدا میشه بهترش هم کرد)

‍‍‍
html:root {
  --bg-main: #fff;
  --c-main: #000;
}

html.dark:root {
  --bg-main: #000;
  --c-main: #fff;
}

body {
  background-color: var(--bg-main);
  color: var(--c-main);
}
‍‍‍


function App() {
  const toggleDarkTheme = () => document.querySelector('html').classList.toggle('dark')
  return (
   <div>
     something e.g. text
     <button onClick={toggleDarkTheme}>change theme</button>
   </div>
  )
}




همین حرکت رو بدون css varibale هم میتونید بزنید البته
یک فایل theme-dark.css درست کنید و تمام style های قبلی رو با اون override کنید

body {
  background-color: #fff;
  color: #000;
}

body .fancy-button {
  border-radiusL 8px;
  border: none;
  font-size: 2rem;
}


body.dark {
  background-color: #000;
  color: #fff;
}

body.dark .fancy-button {
  color: #fff;
  background: darkgray;
}

و حالا همون کلاس dark رو این بار به body بدید