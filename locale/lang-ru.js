/*

    lang-ru.js

    Russian translation for SNAP!

    This file is part of Snap!.

    Snap! is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of
    the License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.



    Note to Translators:
    --------------------
    At this stage of development, Snap! can be translated to any LTR language
    maintaining the current order of inputs (formal parameters in blocks).

    Translating Snap! is easy:


    1. Download

    Download the sources and extract them into a local folder on your
    computer:

        <http://snap.berkeley.edu/snapsource/snap.zip>

    Use the German translation file (named 'lang-de.js') as template for your
    own translations. Start with editing the original file, because that way
    you will be able to immediately check the results in your browsers while
    you're working on your translation (keep the local copy of snap.html open
    in your web browser, and refresh it as you progress with your
    translation).


    2. Edit

    Edit the translation file with a regular text editor, or with your
    favorite JavaScript editor.

    In the first non-commented line (the one right below this
    note) replace "de" with the two-letter ISO 639-1 code for your language,
    e.g.

        fr - French => SnapTranslator.dict.fr = {
        it - Italian => SnapTranslator.dict.it = {
        pl - Polish => SnapTranslator.dict.pl = {
        pt - Portuguese => SnapTranslator.dict.pt = {
        es - Spanish => SnapTranslator.dict.es = {
        el - Greek => => SnapTranslator.dict.el = {

    etc. (see <http://en.wikipedia.org/wiki/ISO_639-1>)


    3. Translate

    Then work through the dictionary, replacing the German strings against
    your translations. The dictionary is a straight-forward JavaScript ad-hoc
    object, for review purposes it should be formatted as follows:

        {
            'English string':
                'Translation string',
            'last key':
        }       'last value'

    and you only edit the indented value strings. Note that each key-value
    pair needs to be delimited by a comma, but that there shouldn't be a comma
    after the last pair (again, just overwrite the template file and you'll be
    fine).

    If something doesn't work, or if you're unsure about the formalities you
    should check your file with

        <http://JSLint.com>

    This will inform you about any missed commas etc.


    4. Accented characters

    Depending on which text editor and which file encoding you use you can
    directly enter special characters (e.g. Umlaut, accented characters) on
    your keyboard. However, I've noticed that some browsers may not display
    special characters correctly, even if other browsers do. So it's best to
    check your results in several browsers. If you want to be on the safe
    side, it's even better to escape these characters using Unicode.

        see: <http://0xcc.net/jsescape/>


    5. Block specs:

    At this time your translation of block specs will only work
    correctly, if the order of formal parameters and their types
    are unchanged. Placeholders for inputs (formal parameters) are
    indicated by a preceding % prefix and followed by a type
    abbreviation.

    For example:

        'say %s for %n secs'

    can currently not be changed into

        'say %n secs long %s'

    and still work as intended.

    Similarly

        'point towards %dst'

    cannot be changed into

        'point towards %cst'

    without breaking its functionality.


    6. Submit

    When you're done, rename the edited file by replacing the "de" part of the
    filename with the two-letter ISO 639-1 code for your language, e.g.

        fr - French => lang-fr.js
        it - Italian => lang-it.js
        pl - Polish => lang-pl.js
        pt - Portuguese => lang-pt.js
        es - Spanish => lang-es.js
        el - Greek => => lang-el.js

    and send it to me for inclusion in the official Snap! distribution.
    Once your translation has been included, Your name will the shown in the
    "Translators" tab in the "About Snap!" dialog box, and you will be able to
    directly launch a translated version of Snap! in your browser by appending

        lang:xx

    to the URL, xx representing your translations two-letter code.


    7. Known issues

    In some browsers accents or ornaments located in typographic ascenders
    above the cap height are currently (partially) cut-off.

    Enjoy!
    -Jens
*/

/*global SnapTranslator*/

SnapTranslator.dict.ru = {

/*
    Special characters: (see <http://0xcc.net/jsescape/>)

    ,    \u00c4, \u00e4

,    \u00d6, \u00f6
    ,    \u00dc, \u00fc
    §      \u00df
*/

    // translations meta information
    'language_name':
        'Русский', // the name as it should appear in the language menu
    'language_translator':
        'Svetlana Ptashnaya, Artem Proskurnev, Pavel Belousov, Nikita Turchanskiy', // your name for the Translators tab
    'translator_e-mail':
        'svetlanap@berkeley.edu, tema@school830.ru, pbsite@mail.ru, nikturchansky@gmail.com', // optional
    'last_changed':
        '2021-01-20', // this, too, will appear in the Translators tab

    //cloud menu
    'Login...':
        'Войти',
    'Signup...':
        'Зарегистрироваться',
    'Logout':
        'Выйти',
    'Change Password...':
        'Сменить пароль',
    'Reset Password...':
        'Сбросить пароль',
    'Resend Verification Email...':
        'Выслать письмо для подтверждения электронной почты',



    // GUI
    // control bar:
    'untitled':
        'Безымянный',
    'development mode':
        'Разрабатываемая версия',

    // categories:
    'Motion':
        'Движение',
    'Looks':
        'Внешность',
    'Sound':
        'Звук',
    'Pen':
        'Перо',
    'Control':
        'Управление',
    'Sensing':
        'Сенсоры',
    'Operators':
        'Операторы',
    'Variables':
        'Переменные',
    'Lists':
        'Списки',
    'Other':
        'Прочее',
    'JavaScript function ( %mult%s ) { %code }':
        'JavaScript функция ( %mult%s ) { %code }',

    // editor:
    'draggable':
        'движимый',

    // tabs:
    'Scripts':
        'Код',
    'Costumes':
        'Костюмы',
    'Backgrounds':
        'Фоны',
    'Sounds':
        'Звуки',

    // names:
    'Sprite':
        'Спрайт',
    'Stage':
        'Сцена',

    // rotation styles:
    'don\'t rotate':
        'не вращаемый',
    'can rotate':
        'вращаемый',
    'only face left/right':
        'зеркальное отображение лево-право при вращении',

    // new sprite button:
    'add a new sprite':
        'Добавить новый спрайт',

    // tab help
    'costumes tab help':
        'Вы можете перенести и бросить сюда изображение со своего компьютера',
    'import a sound from your computer\nby dragging it into here':
        'Вы можете перенести и бросить сюда звуковой файл со своего компьютера',

    // primitive blocks:

    /*
        Attention Translators:
        ----------------------
        At this time your translation of block specs will only work
        correctly, if the order of formal parameters and their types
        are unchanged. Placeholders for inputs (formal parameters) are
        indicated by a preceding % prefix and followed by a type
        abbreviation.

        For example:

            'say %s for %n secs'

        can currently not be changed into

            'say %n secs long %s'

        and still work as intended.

        Similarly

            'point towards %dst'

        cannot be changed into

            'point towards %cst'

        without breaking its functionality.
    */
    //single words in bloks:
    'Hello!':
        'Привет!',
    'Hmm...':
        'Хмм...',
    'back':
        'назад',
    'front':
        'вперед',
    'random position':
        'случайная позиция',
    'random':
        'случайное',
    'center':
        'центр',
    'Turtle':
        'Спрайт',
    'current':
        'текущей',
    'width':
        'ширина',
    'height':
        'высота',
    'pixels':
        'пиксели',
    'temporary?':
        'временый',
    'draggable?':
        'перетаскиваемый',


    
    















    // motion:
    'Stage selected:\nno motion primitives':
        'Выбрана сцена:\nнет блоков движения',

    'move %n steps':
        'передвинуть на %n шагов',
    'turn %clockwise %n degrees':
        'повернуть %clockwise на %n градусов',
    'turn %counterclockwise %n degrees':
        'повернуть %counterclockwise на %n градусов',
    'point in direction %dir':
        'указывать в направлении %dir',
    'point towards %dst':
        'указывать на %dst',
    'go to x: %n y: %n':
        'перейти в точку x: %n y: %n',
    'go to %dst':
        'перейти в точку %dst',
    'glide %n secs to x: %n y: %n':
        'скользить %n сек к x %n y %n',
    'change x by %n':
        'изменить х на %n',
    'set x to %n':
        'установить х %n',
    'change y by %n':
        'изменить y на %n',
    'set y to %n':
        'установить y %n',
    'if on edge, bounce':
        'если на границе, то развернуться',
    'x position':
        'координаты х',
    'y position':
        'координаты у',
    'direction':
        'направление',

    // looks:

    'switch to costume %cst':
        'сменить костюм на %cst',
    'next costume':
        'следующий костюм',
    'costume #':
        'костюм',
    'say %s for %n secs':
        'говорить %s в течение %n сек',
    'say %s':
        'говорить %s',
    'think %s for %n secs':
        'думать %s в течение %n сек',
    'think %s':
        'думать %s',
    '%img of costume %cst':
        '%img костюма %cst',
    'stretch %cst x: %n y: %n %':
        'растянуть %cst на x: %n % y: %n %',
    'new costume %l width %dim height %dim':
        'новый костюм из %l шириной %dim высотой %dim',
    'change %eff effect by %n':
        'изменить эффект %eff на %n',
    'set %eff effect to %n':
        'установить эффект %eff в %n',
    'clear graphic effects':
        'убрать эффекты',
    '%eff effect':
        '%eff - эффект',
    'change size by %n':
        'изменить размер на %n',
    'set size to %n %':
        'установить размер в %n',
    'size':
        'размер',
    'show':
        'показаться',
    'hide':
        'скрыть',
    'shown?':
        'показаться',
    'go to %layer layer':
        'переместиться на слой %n',
    'go back %n layers':
        'переместиться на %n слоёв назад',

    'development mode \ndebugging primitives:':
        'Разрабатываемая версия \nотладка примитивов:',
    'console log %mult%s':
        'консоль-регистрация %mult%',
    'alert %mult%s':
        'предупреждение %mult%',

    // sound:
    'play sound %snd':
        'воспроизводить звук %snd',
    'play sound %snd until done':
        'воспроизв. звук %snd до конца',
    'stop all sounds':
        'остановить все звуки',
    'play sound %snd at %rate Hz':
        'проигрывать звук %snd в диапозоне %rate Гц',
    '%aa of sound %snd':
        'придать %aa звуку %snd', //help!
    'rest for %n beats':
        'пауза длительностью %n',
    'duration':
        'длительность',
    'length':
        'длина',
    'samples':
        'сигнал',
    'sample rate':
        'частота дискретизации',
    'number of channels':
        'число каналов',
    'play note %note for %n beats':
        'играть ноту %note длит. %n',
    'change tempo by %n':
        'изменить длительность на %n',
    'set tempo to %n bpm':
        'установить длительность %n',
    'set instrument to %inst':
        'инструмент %inst',
    'tempo':
        'темп',
    'new sound %l rate %rate Hz':
        'новый звук из %l с частотой %rate Гц',
    'change volume by %n':
        'изменить громксть на %n %',
    'set volume to %n %':
        'установить громкость на %n %',
    'volume':
        'громкость',
    'note':
        'нота',
    'frequency':
        'частота',
    'spectrum':
        'частотный спектр',
    'resolution':
        'разрешение',
    'change balance by %n':
        'изменить баланс на %n',
    'set balance to %n':
        'установить баланс на %n',
    'balance':
        'баланс',
    'play frequency %n Hz':
        'частота воспроизведения - %n Гц',
    'stop frequency':
        'остановить воспроизведение частоты',
    'sine':
        'синус (sine)',
    'square':
        'квадрат (square)',
    'sawtooth':
        'пила (sawtooth)',
    'triangle':
        'треугольник (triangle)',
    '(1) sine':
        '(1) синус (sine)',
    '(2) square':
        '(2) квадрат (square)',
    '(3) sawtooth':
        '(3) пила (sawtooth)',
    '(4) triangle':
        '(4) треугольник (triangle)',

    // pen:
    'clear':
        'очистить всё',
    'pen down':
        'опустить перо',
    'pen up':
        'поднять перо',
    'pen down?':
        'перо опущено?',
    'set pen color to %clr':
        'установить цвет пера %clr',
    'change pen color by %n':
        'изменить цвет пера на %n',
    'set pen color to %n':
        'установить цвет пера %n',
    'change pen %hsva by %n':
        'изменить значение свойства %hsva на %n',
    'set pen %hsva to %n':
        'придать свойству %hsva значение %n',
    'change pen shade by %n':
        'изменить яркость пера на %n',
    'set pen shade to %n':
        'установить яркость пера %n',
    'change pen size by %n':
        'изменить размер пера на %n',
    'pen %pen':
        'свойство пера %pen',
    'set pen size to %n':
        'установить размер пера %n',
    'stamp':
        'отпечатать',
    'fill':
        'заливка',
    'write %s size %n':
        'написать %s размер надписи %n',
    'paste on %spr':
        'отпечатать на %spr',

    // control:
    'when %greenflag clicked':
        'при нажатии на %greenflag',
    'when %keyHat key pressed':
        'при нажатии клавиши %keyHat',
    'when I am %interaction':
        'когда меня %interaction',
    'clicked':
        'кликнут',
    'pressed':
        'нажмут',
    'dropped':
        'бросят',
    'mouse-entered':
        'заденет курсор',
    'mouse-departed':
        'покинет курсор',
    'scrolled-up':
        'прокрутят вверх',
    'scrolled-down':
        'прокрутят вниз',
    'stopped':
        'остановят',
    'when %b':
        'когда %b',
    'when I receive %msgHat':
        'когда я получу %msgHat',
    'broadcast %msg':
        'переслать %msg всем',
    'broadcast %msg and wait':
        'переслать %msg всем и ждать',
    'send %msg to %spr':
        'переслать %msg к %spr',
    'Message name':
        'Название сообщения',
    'message':
        'сообщение',
    'any message':
        'любое сообщение',
    'wait %n secs':
        'ждать %n сек.',
    'wait until %b':
        'ждать до %b',
    'forever %loop':
        'непрерывно %loop',
    'repeat %n %loop':
        'повторять %n %loop',
    'repeat until %b %loop':
        'повторять до %b %loop',
    'for %upvar = %n to %n %cla':
        'для %upvar = %n до %n %cla',
    'if %b %c':
        'если %b %c',
    'if %b %c else %c':
        'если %b %c иначе %c',
    'if %b then %s else %s':
        'если %b тогда %s иначе %s',
    'report %s':
        'передать %s',
    'stop %stopChoices':
        'остановить %stopChoices',
    'all':
        'всё',
    'this script':
        'этот скрипт',
    'this block':
        'этот блок',
    'stop %stopOthersChoices':
        'стоп %stopOthersChoices',
    'all but this script':
        'всех, кроме меня',
    'other scripts in sprite':
        'все другие мои скрипты',
    'run %cmdRing %inputs':
        'выполнить %cmdRing %inputs',
    'launch %cmdRing %inputs':
        'запустить %cmdRing %inputs',
    'call %repRing %inputs':
        'вызвать %repRing %inputs',
    'run %cmdRing w/continuation':
        'выполнить %cmdRing с продолжением',
    'call %cmdRing w/continuation':
        'вызвать %cmdRing с продолжением',
    'tell %spr to %cmdRing %inputs':
        'передать %spr команды %cmdRing %inputs',
    'ask %spr for %repRing %inputs':
        'запросить у %spr информацию %cmdRing %inputs',
    'warp %c':
        'сразу %c',
    'when I start as a clone':
        'Если я клон',
    'create a clone of %cln':
        'клонировать %cln',
    'a new clone of %cln':
        'новый клон %cln',
    'myself':
        'меня',
    'delete this clone':
        'удалить клона',
    'pause all %pause':
        'пауза для всех %pause',

    // sensing:
    'touching %col ?':
        'касается %col ?',
    'touching %clr ?':
        'касается %clr ?',
    'color %clr is touching %clr ?':
        'цвет %clr касаеться %clr ?',
    'ask %s and wait':
        'спросить %s и ждать',
    'what\'s your name?':
        'Как Вас зовут?',
    'answer':
        'ответ',
    'mouse x':
        'x-позиция курсора',
    'mouse y':
        'y-позиция курсора',
    'mouse down?':
        'клавиша мышки нажата?',
    'key %key pressed?':
        'клавиша %key нажата?',
    '%rel to %dst':
        '%rel до %dst',
    'distance':
        'расстояние',
    '%asp at %loc':
        'взять %asp от %loc',
    'distance to %dst':
        'расстояние до %dst',
    'reset timer':
        'сбросить таймер',
    'timer':
        'таймер',
    '%att of %spr':
        '%att у %spr',
    'my %get':
        'атрибут %get',
    'object %self':
        'объект %self',
    'url %s':
        'url-адрес %s',
    'microphone %audio':
        'микрофон %audio',
    'video %vid on %self':
        '%vid видео на %self',
    'set video transparency to %n':
        'выставить прозарачность видео на %n',
    'snap':
        'кадры',

    'is %setting on?':
        '%setting включен?',
    'turbo mode':
        'турбо-мод',
    'video capture':
        'захват видео',
    'mirror video':
        'зеркальное видео',
    'flat line ends':   //help!
        'прямоугольные концы линий',
    'set %setting to %b':
        'выставить %b на %setting',


    'turbo mode?':
        'режим турбо?',
    'set turbo mode to %b':
        'установить турбо-режим %b',

    'filtered for %clr':
        'отфильтровано для %clr',
    'stack size':
        'размер стека',
    'frames':
        'рамки',

    // operators:
    '%n mod %n':
        '%n по модулю %n',
    'round %n':
        'округлить %n',
    '%fun of %n':
        '%fun %n',
    'pick random %n to %n':
        'случайное число от %n до %n',
    '%b and %b':
        '%b и %b',
    '%b or %b':
        '%b или %b',
    'not %b':
        'не %b',
    'true':
        'истина',
    'false':
        'ложь',
    'join %words':
        'объединить %words',
    'hello':
        'Привет',
    'world':
        'мир',
    'letter %idx of %s':
        '%idx буква слова %s',
    'length of %s':
        'длина %s',
    'unicode of %s':
        'unicode буквы %s',
    'unicode %n as letter':
        'буква с unicode %n',
    'is %s a %typ ?':
        '%s это %typ ?',
    'is %s identical to %s ?':
        '%s тождественно %s ?',
    'split %s by %delim':
        'разделить %s по %delim',

    'type of %s':
        'тип %s',

    // variables:
    'Make a variable':
        'Объявить переменную',
    'Variable name':
        'Имя переменной',
    'Delete a variable':
        'Удалить переменную',

    'set %var to %s':
        'придать %var значение %s',
    'change %var by %n':
        'изменить %var на %n',
    'show variable %var':
        'показать переменную %var',
    'hide variable %var':
        'спрятать переменную %var',
    'script variables %scriptVars':
        'переменные скрипта %scriptVars',
    'inherit %shd':
        'наследовать %shd',


    // lists:
    'list %exp':
        'список %exp',
    'numbers from %n to %n':
        'числа от %n до %n',
    '%s in front of %l':
        '%s впереди %l',
    'item %idx of %l':
        'элемент %idx из %l',
    'all but first of %l':
        'все кроме первого из %l',
    'length of %l':
        'длина %l',
    'index of %s in %l':
        'номер элемента %s в %l',
    '%l contains %s':
        '%l содержит %s',
    'is %l empty?':
        'этот лист %l пуст?',
    'map %repRing over %l':
        'действие %repRing в %l',
    'keep items %predRing from %l':
        'использвать %predRing на элементах из %l',
    'find first item %predRing in %l':
        'найти первый элемент %predRing в %l',
    'combine %l using %repRing':
        'комбинировать %l используя %repRing',
    'for each %upvar in %l %cla':
        'для каждого %upvar в %l %cla',
    'append %lists':
        'объединить %lists',
//list

    'thing':
        'что-либо',
    'add %s to %l':
        'добавить %s к %l',
    'delete %ida of %l':
        'удалить %ida из %l',
    'insert %s at %idx of %l':
        'вставить %s на место %idx в %l',
    'replace item %idx of %l with %s':
        'заменить %idx элемент в %l на %s',
    'empty? %l':
        'пустой? %l',
    'item':
        'предмет',

    // other
    'Make a block':
        'Новый блок',
    'find blocks...':
        'Найти блоки...',

    // menus
    // snap menu
    'About...':
        'О программе...',
    'Snap! website':
        'Веб-сайт программы Snap!',
    'Download source':
        'Загрузить исходники программы',
    'Switch back to user mode':
        'Вернуться в режим пользователя',
    'disable deep-Morphic\ncontext menus\nand show user-friendly ones':
        'отключить deep-Morphic\nконтекст меню',
    'Switch to dev mode':
        'перейти в режим разрабатываемой версии',
    'enable Morphic\ncontext menus\nand inspectors,\nnot user-friendly!':
        'включить Morphic\nконтекст меню',
    'Top':
        'Наверх',
    'Bottom':
        'Вниз',
    'Up':
        'Выше',
    'Down':
        'Ниже',

    // project menu
    'Project notes...':
        'Проектные Записки...',
    'New':
        'Новый проект',
    'Open...':
        'Открыть...',
    'Save':
        'Сохранить',
    'Save As...':
        'Сохранить как...',
    'Import...':
        'Импорт...',
    'file menu import hint':
        'загрузить проект, костюм или звук',
    'Export project as plain text...':
        'Экспортировать проект как текстовый файл...',
    'Export project...':
        'Экспортировать проект...',
    'save project data as XML\nto your downloads folder':
        'сохранить и скачать проект в виде XML файла',
    'Export summary...':
        'Экспортируемая информация...',
    'save a summary\nof this project':
        'сохранить и скачать информацию о проекте',
    'open a new browser browser window\n with a summary of this project':
        'представить проектные данные как XML\nв новом окне браузера',
    'Export blocks...':
        'Экспортировать блоки...',
    'show global custom block definitions as XML\nin a new browser window':
        'представить определения глобальных пользовательских блоков как XML\nв новом окне браузера',
    'Unused blocks...':
        'Неиспользуемые блоки...',
    'find unused global custom blocks\nand remove their definitions':
        'поиск и удаление неиспользуемых блоков',
    'Import tools':
        'Импортировать сервисные ср-ва',
    'load the official library of\npowerful blocks':
        'загрузить служебную библиотеку блоков',
    'Backgrounds...':
        'Фоны...',
    'Libraries...':
        'Библиотеки...',
    'Select categories of additional blocks to add to this project.':
        'выбрать дополнительные библиотеки блоков\nдля добавления к проекту',
    'Select a costume from the media library':
        'Выбор костюма из библиотеки изображений',
    'Select a sound from the media library':
        'Выбор звука из медиа-библиотеки',

    // settings menu
    'Language...':
        'Язык...',
    'Zoom blocks...':
        'Увеличение блоков...',
    'Zoom blocks':
        'Увеличение блоков',
    'Fade blocks...':
        'Обесцвечивание блоков...',
    'Fade blocks':
        'Обесцвечивание блоков',
    'Stage size...':
        'Размер сцены...',
    'Microphone resolution...':
        'Уровень микрофона...',
    'low':
        'низкий',
    'high':
        'высокий',
    'max':
        'максимальный',
    'Log pen vectors':
        'Сохранять линии пера в векторном виде',
    'Hyper blocks support':
        'Поддержка гиперблоков',
    'Retina display support':
        'Поддержка технологии Retina display',
    'uncheck for lower resolution,\nsaves computing resources':
        'нажмите для использования низкого разрешения\nэто уменьшит нагрузку на ресурсы компьютера',
    'check for higher resolution,\nuses more computing resources':
        'нажмите, чтобы использовать высокое разрешение\nэто увеличит нагрузку на ресурсы компьютера',
    'Stage size':
        'Размер сцены',
    'Stage width':
        'Ширина сцены',
    'Stage height':
        'Высота сцены',
    'Blurred shadows':
        'Контрастность тени',
    'uncheck to use solid drop\nshadows and highlights':
        'снимите флажок, чтобы использовать сплошные\nтени и подсветки',
    'check to use blurred drop\nshadows and highlights':
        'отметьте, чтобы использовать размытые\nтени и подсветки',
    'Zebra coloring':
        'Использование альтернативных цветов',
    'check to enable alternating\ncolors for nested blocks':
        'отметьте, чтобы разрешить использование\nперемежающихся цветов для вложенных блоков',
    'uncheck to disable alternating\ncolors for nested block':
        'снимите флажок, чтобы отключить использование\nперемежающихся цветов для вложенных блоков',
    'Dynamic input labels':
        'Использование динамических обозначений',
    'uncheck to disable dynamic\nlabels for variadic inputs':
        'снимите флажок, чтобы отключить использование динамических обозначений\nпри вводе с переменным числом аргументов',
    'check to enable dynamic\nlabels for variadic inputs':
        'отметьте, чтобы разрешить использование динамических обозначений\nпри вводе с переменным числом аргументов',
    'Prefer empty slot drops':
        'Использование незанятых ячеек ввода',
    'settings menu prefer empty slots hint':
        'отметьте, чтобы помещать генераторы значений\nтолько в незанятые ячейки ввода',
    'uncheck to allow dropped\nreporters to kick out others':
        'снимите флажок, чтобы разрешить помещать генераторы значений\nв занятые ячейки ввода',
    'Long form input dialog':
        'Расширенная форма диалога ввода',
    'check to always show slot\ntypes in the input dialog':
        'нажмите, чтобы указывать типы ячеек ввода\nв диалоге ввода',
    'uncheck to use the input\ndialog in short form':
        'нажмите, чтобы использовать краткую форму\nдиалога ввода',
    'Virtual keyboard':
        'Виртуальная клавиатура',
    'uncheck to disable\nvirtual keyboard support\nfor mobile devices':
        'нажмите, чтобы отключить использование виртуальной клавиатуры\nдля мобильных устройств',
    'check to enable\nvirtual keyboard support\nfor mobile devices':
        'нажмите, чтобы разрешить использование виртуальной клавиатуры\nдля мобильных устройств',
    'Input sliders':
        'Использование ползунков ввода',
    'Execute on slider change':
        'Показывать выбор ползунка',
    'check to run\nthe edited script\nwhen moving the slider':
        'Показывать на сцене\nвыбор ползунка,\nкогда двигаешь его',
    'uncheck to disable\ninput sliders for\nentry fields':
        'нажмите, чтобы отключить использование ползунков\nпри заполнении полей ввода',
    'check to enable\ninput sliders for\nentry fields':
        'нажмите, чтобы разрешить использование ползунков\nпри заполнении полей ввода',
    'Clicking sound':
        'Звук щелчка',
    'uncheck to turn\nblock clicking\nsound off':
        'нажмите, чтобы выключить щелчок\nпри соединении блоков',
    'check to turn\nblock clicking\nsound on':
        'нажмите, чтобы включить щелчок\nпри соединении блоков',
    'Animations':
        'Aнимация',
    'uncheck to disable\nIDE animations':
        'снимите флажок, чтобы отключить\nIDE aнимацию',
    'check to enable\nIDE animations':
        'отметьте, чтобы разрешить\nIDE aнимацию',
    'Turbo mode':
        'Режим Турбо',
    'check to prioritize\nscript execution':
        'нажмите, чтобы ускорить выполнение скрипта',
    'uncheck to run scripts\nat normal speed':
        'нажмите для выполнения скрипта\nс нормальной скоростью',
    'Flat design':
        'Белый дизайн',
    'check for alternative\nGUI design':
        'нажмите для включения\nальтернативного дизайна среды разработки',
    'uncheck for default\nGUI design':
        'нажмите для включения\nстандартного дизайна среды разработки',
    'Nested auto-wrapping':
        'Nested auto-wrapping',
    'Keyboard Editing':
        'Редактирование с клавиатуры',
    'check to enable\nkeyboard editing support':
        'отметьте, чтобы включить\nвозможность программирования с помощью клавиатуры (Shift+Клик на блок)',
    'uncheck to disable\nkeyboard editing support':
        'снимите флажок, чтобы программировать\nтолько мышью без использования клавиатуры',
    'Table support':
        'Поддержка таблиц',
    'uncheck to disable\nmulti-column list views':
        'снимите флажок для отключения\nвозможности отображения списка в виде таблицы',
    'check for multi-column\nlist view support':
        'отметьте для включения\nвозможности отображения списка в виде таблицы',
    'Table lines':
        'Выделить линии у таблицы',
    'uncheck for less contrast\nmulti-column list views':
        'снимите флажок, чтобы линии таблицы в окне отображения таблиц\nстали менее контрасными',
    'check for higher contrast\ntable views':
        'отметьте, чтобы линии таблицы в окне отображения таблиц\nстали более контрасными',
    'Visible stepping':
        'Отображение шагов выполнения',
    'check to turn on\n visible stepping (slow)':
        'нажмите, чтобы отображались\nшаги выполнения скрипта (медленно)',
    'uncheck to turn off\nvisible stepping':
        'нажмите, чтобы отключить отображение\nшагов выполнения скрипта',
    'uncheck to turn off\nlogging pen vectors':
        'нажмите, чтобы линии пера сохранялись\nв растровом виде (как пикселы)',
    'check to turn on\nlogging pen vectors':
        'нажмите, чтобы линии пера сохранялись\nв векторном виде (как объекты)',
    'Thread safe scripts':
        'Защищенность скрипта в многопоточном режиме',
    'uncheck to allow\nscript reentrance':
        'нажмите, чтобы разрешить\nповторный вход в скрипт',
    'check to disallow\nscript reentrance':
        'нажмите, чтобы отключить\nповторный вход в скрипт',
    'Plain prototype labels':
        'Простые заголовки блоков',
    'uncheck to always show (+) symbols\nin block prototype labels':
        'нажмите, чтобы показывать (+)\nпри редактировании заголовка в редакторе блока',
    'check to hide (+) symbols\nin block prototype labels':
        'нажмите, чтобы отключить (+)\nпри редактировании заголовка в редакторе блока',
    'Flat line ends':
        'Прямоугольные концы линий',
    'uncheck for round ends of lines':
        'нажмите, чтобы\nконцы нарисованных линий закруглялись',
    'check for flat ends of lines':
        'нажмите, чтобы отключить\nзакругления на концах нарисованных линий',
    'Codification support':
        'Поддержка кодификации блоков',
    'uncheck to disable\nblock to text mapping features':
        'нажмите, чтобы убрать блоки\nтрансляции в текст на другой язык программирования',
    'check for block\nto text mapping features':
        'нажмите, чтобы добавить блоки\nтрансляции в текст на другой язык программирования',
    'Inheritance support':
        'Поддержка наследования',
    'uncheck to disable\nsprite inheritance features':
        'снимите флажок, чтобы отключить\nнаследование свойств спрайтов',
    'check for sprite\ninheritance features':
        'отметьте, чтобы включить\nнаследование свойств спрайтов',

    // inputs
    'with inputs':
        'с вводимыми данными',
    'input names:':
        'имена вводимых данных:',
    'Input Names:':
        'Имена Вводимых Данных:',
    'input list:':
        'вводимый список:',

    // context menus:
    'help':
        'справка по блоку',

    // blocks:
    'help...':
        'помощь...',
    'relabel...':
        'переобозначить...',
    'duplicate':
        'продублировать',
    'make a copy\nand pick it up':
        'скопировать\nи запомнить',
    'only duplicate this block':
        'продублировать только данный блок',
    'delete':
        'удалить',
    'script pic...':
        'изображение скрипта...',
    'save a picture\nof this script':
        'сохранить картинку\nэтого скрипта',
    'result pic...':
        'изображение скрипта с результатом...',
    'save a picture of both\nthis script and its result':
        'сохранить картинку этого\nскрипта и его результат',
    'open a new window\nwith a picture of this script':
        'представить изображение скрипта\nна новой странице',
    'ringify':
        'обвести',
    'unringify':
        'убрать обводку',
    'find blocks':
        'найти блоки',
    'hide primitives':
        'скрыть стандартные блоки',
    'show primitives':
        'отобразить стандартные блоки',

    // custom blocks:
    'delete block definition...':
        'удалить блок',
    'edit...':
        'редактировать...',

    // sprites:
    'edit':
        'редактировать',
    'move':
        'переместить',
    'clone':
        'клонировать',
    'export...':
        'экспорт...',
    'parent...':
        'родитель...',
    'release':
        'освободить',
    'make temporary and\nhide in the sprite corral':
        'сделать временным и\nубрать отдельный спрайт',
    'current parent':
        'родитель спрайта',
    'add a new Turtle sprite':
        'создать новый стандартный спрайт',
    'paint a new sprite':
        'нарисовать новый спрайт',
    'take a camera snapshot and\nimport it as a new sprite':
        'сделать фотографию камерой и\nиспользовать изображение как новый спрайт',
    'pivot':
        'центр вращения',
    'edit the costume\'s\nrotation center':
        'указать центр вращения для костюма',

    // stage:
    'show all':
        'показать все',
    'pic...':
        'картинка...',
    'open a new window\nwith a picture of the stage':
        'преобразовать вид текущей сцены\nв картинку',

    // scripting area
    'clean up':
        'упорядочить',
    'arrange scripts\nvertically':
        'размещать скрипты\nвертикально',
    'add comment':
        'добавить комментарий',
    'scripts pic...':
        'скрипты в картинку...',
    'open a new window\nwith a picture of all scripts':
        'преобразовать скрипты на листе\nв картинку',
    'make a block...':
        'новый блок...',
    'use the keyboard\nto enter blocks':
        'использовать клавиатуру\nдля работы с блоками',
    'undrop':
        'отменить',
    'undo the last\nblock drop\nin this pane':
        'отменить последнее\nдействие с блоком',
    'redrop':
        'вернуть',
    'redo the last undone\nblock drop\nin this pane':
        'повторить отменённое\nдействие с блоком',

    // costumes
    'rename':
        'переименовать',
    'export':
        'экспорт',
    'rename costume':
        'переименовать костюм',

    // sounds
    'Play sound':
        'Воспроизводить звук',
    'Stop sound':
        'Остановить звук',
    'Stop':
        'Стоп',
    'Play':
        'Воспроизводить',
    'rename sound':
        'переименовать звук',
    'spectrum':
        'частотный спектр',
    'resolution':
        'разрешение',
    'motion':
        'движение',

    // dialogs
    'Import library':
        'Загрузка библиотек',
    'Table view':
        'Табличный вид',
    'Save project':
        'Сохранение проекта',
    'Export Project As...':
        'Экспортировать проект как...',
    'Cloud':
        'Облако',
    'Browser':
        'Браузер',
    'Examples':
        'Примеры',
    
    
    // buttons
    'OK':
        'OK',
    'Ok':
        'Ok',
    'Cancel':
        'Отменить',
    'Yes':
        'Да',
    'No':
        'Нет',
    'Open':
        'Открыть',
    'Empty':
        'Пусто',
    'Import':
        'Импортировать',

    // help
    'Help':
        'Справка',

    // Project Manager
    'Untitled':
        'Безымянный',
    'Open Project':
        'Открыть проект',
    '(empty)':
        '(пусто)',
    'Saved!':
        'Сохранен!',
    'Delete Project':
        'Удалить Проект',
    'Are you sure you want to delete':
        'Вы уверены вы хотите удалить?',
    'rename...':
        'переименовать...',

    // costume editor
    'Costume Editor':
        'Редактор Масок',
    'click or drag crosshairs to move the rotation center':
        'щелкните на перекрестье переместить центр поворота',

    // project notes
    'Project Notes':
        'Проектные Записки',

    // new project
    'New Project':
        'Новый Проект',
    'Replace the current project with a new one?':
        'Заменить данный проект на новый?',

    // save project
    'Save Project As...':
        'Сохранить Проект как...',

    // export blocks
    'Export blocks':
        'Экспорт блоки',
    'Import blocks':
        'Импорт блоки',
    'this project doesn\'t have any\ncustom global blocks yet':
        'У этого проекта пока нет глобальных\nпользовательских блоков',
    'select':
        'выделить',
    'none':
        'ничего',

    // variable dialog
    'for all sprites':
        'для всех спрайтов',
    'for this sprite only':
        'только для текущего спрайта',

    // block dialog
    'Change block':
        'Заменить блок',
    'Command':
        'Команда',
    'Reporter':
        'Значение',
    'Predicate':
        '"Правда или ложь"',

    // block editor
    'Block Editor':
        'Редактор Блока',
    'Apply':
        'Применить',
    'translations...':
        'переводы',
    'block variables...':
        'переменные блока...',
    'rename all...':
        'переименовать все...',
    'block variables':
        'переменные блока',
    'Block variable name':
        'Имя переменной блока',
    'remove block variables...':
        'убрать переменные блока',

    // block deletion dialog
    'Delete Custom Block':
        'Удалить Пользовательский Блок',
    'block deletion dialog text':
        'Вы уверены вы хотите удалить этот блок?',

    // input dialog
    'Create input name':
        'Определить имя вводимых данных',
    'Edit input name':
        'Редактировать имя вводимых данных',
    'Edit label fragment':
        'Редактировать фрагмент обозначения',
    'Title text':
        'Заголовок текста',
    'Input name':
        'Имя вводимых данных',
    'Delete':
        'Удалить',
    'Object':
        'Объект',
    'Number':
        'Число',
    'Text':
        'Tекст',
    'List':
        'Список',
    'Any type':
        'Любой тип',
    'Boolean (T/F)':
        'Правда или Ложь',
    'Command\n(inline)':
        'Команда\n(встроенная)',
    'Command\n(C-shape)':
        'Команда\n(С-форма)',
    'Any\n(unevaluated)':
        'Любой\n(неопределенный)',
    'Boolean\n(unevaluated)':
        'Булев\n(неопределенный)',
    'Single input.':
        'Единичный ввод.',
    'Default Value:':
        'Значение по умолчанию:',
    'Multiple inputs (value is list of inputs)':
        'Многократный ввод (список)',
    'Upvar - make internal variable visible to caller':
        'Сделать внутреннюю переменную видимой',

    // About Snap
    'About Snap':
        'О программе',
    'Back...':
        'Bозврат...',
    'License...':
        'Лицензия...',
    'Modules...':
        'Модули...',
    'Credits...':
        'Сотрудники...',
    'Translators...':
        'Переводчики',
    'License':
        'Лицензия',
    'current module versions:':
        'Komponenten-Versionen',
    'Contributors':
        'Участники',
    'Translations':
        'Переводы',
    'Reference manual':
        'Справочное руководство',

    // variable watchers
    'normal':
        'стандартный',
    'large':
        'масштабированный',
    'slider':
        'бегунок',
    'slider min...':
        'бегунок min...',
    'slider max...':
        'бегунок max...',
    'import...':
        'импорт...',
    'Slider minimum value':
        'Бегунок - min значение',
    'Slider maximum value':
        'Бегунок - max значение',

    // list watchers
    'length: ':
        'длина: ',
    'list view...':
        'в виде списка...',
    'table view...':
        'в виде таблицы...',
    'open in dialog...':
        'открыть в отдельном окне...',
    'open in another dialog...':
        'открыть в ещё одном окне...',

    // coments
    'add comment here...':
        'добавьте комментарий сюда...',

    // drow downs
    // directions
    '(90) right':
        '(90) направо',
    '(-90) left':
        '(-90) налево',
    '(0) up':
        '(0) вверх',
    '(180) down':
        '(180) вниз',

    // collision detection
    'mouse-pointer':
        'курсор мышки',
    'edge':
        'край',
    'pen trails':
        'следы пера',
    'cut from %spr':
        'вырезать из %spr',

    // costumes
    'Opening Costumes...':
        'Загрузка костюмов...',
    'pen':
        'перо',
    'tip':
        'на острие',
    'middle':
        'посередине',
    'Paint a new costume':
        'Нарисовать новый костюм',
    'Import a new costume from your webcam':
        'Сделать костюм из фотографии вебкамерой',

    // graphical effects
    'sprites':
        'спрайты',
    'ghost':
        'прозрачность',
    'color':
        'цвет',
    'r-g-b-a':
        'RGBA цвет',
    'fisheye':
        'рыбий глаз',
    'whirl':
        'вихрь',
    'pixelate':
        'пикселизация',
    'mosaic':
        'мозаика',
    'negative':
        'негатив',
    'comic':
        'комикс',
    'confetti':
        'конфетти',
    'saturation':
        'насыщенность',
    'brightness':
        'яркость',
    'transparency':
        'прозрачность',
    'hue':
        'оттенок',


    // keys
    'space':
        'пробел',
    'any key':
        'любая клавиша',
    'up arrow':
        'стрелка вверх',
    'down arrow':
        'стрелка вниз',
    'right arrow':
        'стрелка вправо',
    'left arrow':
        'стрелка влево',
    'left':
        'левая граница',
    'right':
        'правая граница',
    'top':
        'верхняя граница',
    'bottom':
        'нижняя граница',

    // messages
    'new...':
        'новый...',

    // math functions
    'abs':
        'абсолютное значение',
    'neg':
        'умножить на -1',
    'ceiling':
        'округление до большего',
    'floor':
        'округление до меньшего',
    'sqrt':
        'квадратный корень',
    'sin':
        'sin',
    'cos':
        'cos',
    'tan':
        'tan',
    'asin':
        'asin',
    'acos':
        'acos',
    'atan':
        'atan',
    'ln':
        'ln',
    'e^':
        'e^',

    // delimiters
    'letter':
        'буквам',
    'whitespace':
        'пробелам',
    'line':
        'строкам',
    'tab':
        'табуляторам',
    'cr':
        'концам строк',
        
    // data types
    'number':
        'число',
    'text':
        'текст',
    'Boolean':
        'булевая переменная',
    'list':
        'список',
    'command':
        'команда',
    'reporter':
        'генератор значений',
    'predicate':
        'предикат',
    'sprite':
        'спрайт',
    'costume':
        'костюм',
    'sound':
        'звук',

    // list indices
    'last':
        'последний',
    'any':
        'любой',
    'now connected':
        'соединение установлено',
    'undo':
        'отменить',
        
    // attributes

    'neighbors':
        'соседи',
    'self':
        'я',
    'other sprites':
        'другие спрайты',
    'parts':
        'части',
    'anchor':
        'якорь',
    'parent':
        'родитель',
    'children':
        'потомок',
    'clones':
        'клоны',
    'other clones':
        'другие клоны',
    'dangling?':
        'подвешенный',
    'rotation style':
        'тип вращения',
    'rotation x':
        'смещение по x',
    'rotation y':
        'смещение по y',
    'center x':
        'координ. от центра по х',
    'center y':
        'координ. от центра по у',
    'name':
        'имя',
    'stage':
        'сцена',
    'costumes':
        'костюмы',
    'sounds':
        'звуки',

    //Paint editor
    'Paint Editor':
        'Графический редактор',
    'flip \u2194':
        'отраж. \u2194',
    'flip \u2195':
        'отраж. \u2195',
    'grow':
        'увел.',
    'shrink':
        'умен.',
    'Brush size':
        'Размер кисти',
    'Constrain proportions of shapes?\n(you can also hold shift)':
        'Сохранять пропорции фигур (круг, квадрат)?\nТак же можно использовать Shift',
    'Paintbrush tool\n(free draw)':
        'Кисть (свободное рисование)',
    'Stroked Rectangle\n(shift: square)':
        'Прямоугольник\n(shift: квадрат)',
    'Stroked Ellipse\n(shift: circle)':
        'Эллипс\n(shift: окружность)',
    'Eraser tool':
        'Ластик',
    'Set the rotation center':
        'Установка центра вращения',
    'Line tool\n(shift: vertical/horizontal)':
        'Линия\n(shift: вертикальная/горизонтальная)',
    'Filled Rectangle\n(shift: square)':
        'Закрашенный прямоугольник\n(shift: квадрат)',
    'Filled Ellipse\n(shift: circle)':
        'Закрашенный эллипс\n(shift: окружность)',
    'Fill a region':
        'Заливка',
    'Pipette tool\n(pick a color anywhere)':
        'Пипетка\n(взять цвет кликом на любую точку)',

    //Переводы найденых в программе, но не в файле перевода
    'experimental -\nunder construction':
        'экспериментальная возможность -\nв разработке',
    'Camera':
        'Камера',
    'Camera not supported':
        'Камера не поддерживается',
    'Please make sure your web browser is up to date\nand your camera is properly configured. \n\nSome browsers also require you to access Snap!\nthrough HTTPS to use the camera.\n\nPlase replace the "http://" part of the address\nin your browser by "https://" and try again.':
        'Пожалуйста, проверьте, что Ваш браузер обновлён до последней версии\nи Ваша камера правильно сконфигурирована. \n\nНекоторые браузеры требуют протокола HTTPS\nдля доступа к СНАП к камере.\n\nПопробуйте заменить "http://" в адресной строке\nВашего браузера на "https://" и попробуйте ещё раз.',
    'current %dates':
        'нынешний %dates',
    'year':
        'год',
    'month':
        'месяц',
    'date':
        'день',
    'day of week':
        'день недели',
    'hour':
        'час',
    'minute':
        'минута',
    'second':
        'секунда',
    'time in milliseconds':
        'время в миллисекундах',
    'costume name':
        'имя костюма',
    'log pen vectors':
        'сохранять линии пера в векторном виде',
    'word':
        'словам',
    'my':
        'мой...',

    // for cloud
    'User name:':
        'Имя пользователя:',
    'Password:':
        'Пароль:',
    'stay signed in on this computer\nuntil logging out':
        'Запомнить меня',
    'Sign in':
        'Вход',
    'Sign up':
        'Регистрация',
    'Reset password':
        'Сбросить пароль',
    'Resend Verification Email':
        'Выслать письмо для подтверждения электронной почты',

    'Birth date:':
        'Месяц рождения:',
    'year:':
        'Год рождения',
    'January':
        'Январь',
    'February':
        'Февраль',
    'March':
        'Март',
    'April':
        'Апрель',
    'May':
        'Май',
    'June':
        'Июнь',
    'July':
        'Июль',
    'August':
        'Август',
    'September':
        'Сентябрь',
    'October':
        'Октябрь',
    'November':
        'Ноябрь',
    'December':
        'Декабрь',
    '2000 or before':
        '2000 или раньше',
    'E-mail address:':
        'Электронная почта:',
    'Repeat Password:':
        'Повторите пароль:',
    'Terms of Service...':
        'Условия соглашения (на англ.)',
    'Privacy...':
        'Политика (на англ.)',
    'I have read and agree\nto the Terms of Service':
        'Я прочитал(-ла) и принимаю\nусловия соглашения',
    'Resend verification email':
        'Повторно выслать письмо',       

    //for files
    'Computer':
        'Компьютер',
    '(empty)':
        '(пусто)',
    'Save Project':
        'Сохранить проект',

    
};
