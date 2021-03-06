<!DOCTYPE html>
<html>
	<head>
		<title>МойСнап!</title>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="index.css">
		<script type="text/javascript" src="js/jquery-3.5.1.min.js"></script>
		<script src="js/script.js"></script>				
		<link rel="icon" href="pic/favicon.ico">
	</head>
	<body>
       <div id="loading-fade">
                </div>
         <table id="Menu">
                        <tr>
                                <td id="MenuSection">
                                                <div><a href="http://snap.school830.ru/">
                                                        <em id="SnapWord">Снап!</em>
                                                </a></div>

                                                <div><a href = "#WhatIsSnap" id = "Section2">
                                                        Что такое <em id="SnapWord" >Снап!</em>
                                                </a></div>

                                                <div><a href = "help.php" id="Section3">
                                                        Руководство</em>
                                                </a></div>

                                                <div><a href = "#Opportunities" id="Section4">
                                                        Возможности
                                                </a></div>

                                                <div><a href = "#Met" id="Section5">
                                                        Уроки
                                                </a></div>
                                                <div>
                                                        <button id="but_loading" href="#">
                                                                Загрузка
                                                        </button>
                                                </div>
                                </td>
                        </tr>
                </table>

	<?php include "loading.php";  ?>
		<table id="Base">
			<tr id="WhatIsSnap">
				<td>
				
					<table id="BackGroundOfAllChapter">
						<tr id="BeginingOfChapter">
							<td colspan="2">Что такое <em id="SnapWord">Снап!</em> <a name = "WhatIsSnap"></a></td>
						</tr>
						<tr id="Content">
							<td id="text">
								<em id="SnapWord">Снап!</em> - система наглядного анимационного прораммирования, ориентированная на обучение пользователей, которые являются начинающими в сфере прграммирования. Нажав на первую кнопку в меню, вы перейдете в Снап!. Благодаря русскоязычной адаптации и русскоязычному сайту, Снап стал более доступным для русскоязычных пользователей. Главное преимущество Снап! - простота и понятность. Все программы строятся из блоков с кодами. Нужно лишь присоединить их друг к другу. С помощью Снап! можно делать многое, начиная от простых математических программ и заканчивая настоящими играми. На англоязычном веб-сайте программы Снап! есть огромное количество уже готовых работ, которые можно скачать абсолютно бесплатно. Для ознакомления с интерфейсом нажмите на "Руководство"

							</td>
							<td id="picture"><img src="pic/SnapLogo.png" width="200"></td>
						</tr>
					</table>
				</td>
			</tr>
			<tr id = "HowToUseSnap">
				<td>
				<a name = "Opportunities"></a>
					<table id="BackGroundOfAllChapter">
						<tr id="BeginingOfChapter">
							<td colspan="2" id="Opportunities">Возможности</td>
						</tr>
						<tr id="SecondBeginingOfChapter">
							<td colspan="2"> 
								<div style="width: 250px">Создание блока</div>
							</td>
						</tr>
						<tr id="Content">
							<td id="text" colspan="2">
								В Снап! имеется возможность создать свой собственный блок. Он может выполнять роль программы, которая обрабатывает введенные данные. Собственный блок содержит в себе другие блоки, которые в сумме создают код. Таким образом один блок может делать почти что угодно. Создать собственный блок можно нажатием на "+", либо нажатием на "новый блок". После нажатия на кнопку у вас откроется меню, в котором потребуется выбрать вид блока и его название. Блок "Команда" встраивается непосредственно в код. У этого блока есть характерные выпуклости и вогнутости похожие на пазл. К этому блоку можно присоединить другие блоки. Блок "Значение" обладает какими-либо данными. Это могут числа, строки или списки. Он имеет закругленную форму. Его можно встроить только в ячейки других блоков. Блок "Правда или ложь" имеет булевое значение.  Если внутри этого блока выполняется условие, то он будет иметь значение "правда". Блок обладает формой с острыми концами по краям. Его можно встроить только в ячейки других блоков.

								<p style="text-align: center;"><img src="pic/NewBlock1.png" width="400" align="middle"></p>
                                

                                После нажатия кнопки "ОК" откроется "Редактор Блока". Здесь нужно будет составить код, который будет выполнять блок. Чтобы добавить блок, перетащите его из поля с блоками. После того, как вы завершили составление кода, нажмите кнопку "ОК", чтобы завершить создание собственного блока. Если вы не сохранили свой проект, то после перезагрузки или закрытия страницы ваш блок пропадет.

                                <p style="text-align: center;"><img src="pic/NewBlock2.png" width="400" align="middle"></p>
							</td>
						</tr>
						<tr id="SecondBeginingOfChapter">
							<td>
								<div style="width: 250px">Меню настроек</div>
							</td>
						</tr>
						<tr id="Content">
							<td id="text">
								В меню настроек находится огромное количество разных возможностей. Одной из этих возможностей является смена языка. При входе в Снап! сначала будет стоять англоязычная версия. Чтобы изменить ее, нажмите на кнопку настроек в верхней строке сайта. Дальше нажмите "Language" и выберите "Русский".

								<p style="text-align: center;"><img src="pic/LanguageSelectionMenu.png" width="200" align="middle"></p>
							</td>
						</tr>
						<tr id="SecondBeginingOfChapter">
							<td>
								<div style="width: 250px">Меню файлов</div>
							</td>
						</tr>
						<tr id="Content">
							<td id="text" colspan="2">

								 В Снап! доступен широкий выбор взаимодействий с файлами. В этой главе будет написано только про три основных взаимодействия, которые обязательно пригодятся в вашей работе. Все взаимодействия находятся в меню файлов. Чтобы попасть в меню, нужно нажать на вкладку настроек файлов.<!--<br><br> Одно из основных взаимодействий - "Сохранить". Чтобы попасть в меню взаимодействий, нужно нажать на вкладку настроек файлов и выбрать одно из действий. После нажатия действия "Сохранить", откроется окно, в котором можно будет выбрать навзание и место для сохранения вашего проекта. При выборе "Облако", ваш проект сохранится в вашей учетной записи, и вы всегда сможете получить к нему доступ с любого компьютера. О том, как создать свой профиль в СНАП, будет написано в следующих главах. Если вы выбирете "Компьютер", вам предложат выбрать место сохранения на вашем компьютере, и после выбора места, ваш проект проебразуется в файл с расширением ".xml". После того, как окончательно сохранили проект, после каждого нажатия на кнопку "Сохранить", ваш сохранившийся файл будет просто обновляться.<br><br>Также существует важное действие "Открыть". После нажатия на него появится окно, в котором нужно будет выбрать способ открытия проекта. Открытие через "Облако" предложит октрыть один из проектов, сохраненных у вас в учетной записи. Открытие через "Компьютер" предложит октрыть один из файлов, сохраненных у вас на компьютере. Перед открытием файла на комптютере, нужно убедится, что у него обладает расширением ".xml".  --> <br>
								 <p style="text-align: center;"><img src="pic/FileInteractionMenu.png" width="200" align="middle"></p>

								 Первая пара основных действий в меню файлов - "Сохранить" и "Сохранить как". После нажатия на кнопку "Сохранить как" откроется окно, в котором нужно будет выбрать название и место для сохранения вашего проекта. При выборе места "Облако" ваш проект сохранится в учетной записи, и вы всегда сможете получить к нему доступ с любого компьютера. О том, как создать учетную запись в Снап!, будет написано дальше. Если вы выберете "Компьютер", вам предложат выбрать место сохранения проекта на вашем компьютере. После окончательного выбора места нажмите кнопку "Сохранить". Если вы выбрали компьютер в виде места сохранения, то у вас начнется загрузка файла с расширением ".xml". После сохранения проекта, при каждом нажатии на кнопку "Сохранить" в меню  ваш сохранившийся файл будет самостоятельно перезаписываться.

								<p style="text-align: center;"><img src="pic/HowToSave.png" width="500" align="middle"></p>

								Также существует важное действие "Открыть". После нажатия на кнопку "Открыть" появится окно, в котором нужно будет выбрать способ открытия проекта. Открытие через "Облако" предложит октрыть один из проектов, сохраненных у вас в учетной записи. В "Примерах" находятся уже готовые проекты, которые вы можете открыть в любой момент. Нажав на "Компьютер", выберете файл, который сохранен у вас на компьютере. Перед открытием файла на компьютере нужно убедиться, что он обладает расширением ".xml".

								<p style="text-align: center;"><img src="pic/HowToOpen.png" width="500" align="middle"></p>

							</td>
						</tr>
						<tr id="SecondBeginingOfChapter">
							<td>
								<div style="width: 250px">Меню "Облако"</div>
							</td>
						</tr>
						<tr id="Content">
							<td id="text" colspan="2">
						 		В Снап! можно создать учетную запись. Эта возможность позволит вам сохранять и открывать свои проекты на любом устройстве. Для этого только нужно подключение к интернету. Чтобы войти в меню взаимодействия с облаком вам нужно нажать на кнопку "Облако".

						 		<p style="text-align: center;"><img src="pic/Cloud.png" width="300" align="middle"></p>

						 		Если у вас еще нет учетной записи, то нажмите на кнопку "Зарегистрироваться". В открывшемся окне вам потребуется ввести имя пользователя, дату рождения, e-mail и  пароль. После нажатия на кнопку "ОК", на введенную вами почту придет письмо для подтверждения вашей учетной записи. Подтвердив создание аккаунта, вы сразу можете им пользоваться.

						 		<p style="text-align: center;"><img src="pic/Registration.png" width="300" align="middle"></p>

						 		Если у вас уже есть учетная запись, то нажмите на кнопку "Войти". Там вам потребуется ввести имя пользователя учетной записи и пароль от нее. Поставив галочку напротив "Запомнить меня", вам не придется повторно входить в учетную запись при закрытии страницы Снап!.

						 		<p style="text-align: center;"><img src="pic/LogIn.png" width="300" align="middle"></p>

						 		Также в меню "Облако" присутствуют кнопки "Сброс пароля" и "Повторно отправить подтверждающее письмо". Нажав на "Сброс пароля", откроется меню, где вас попросят ввести имя пользователя. После этого, вам на почту придет письмо с ссылкой, после перехода на которую у вас сбросится пароль. Сразу же вам придет еще одно письмо с новым сгенерированным паролем. В этом письме вас так же попросят немедленно войти в свою учетную запись с новым паролем и сменить его. Нажать на кнопку "Повторно отправить подтверждающее письмо" потребуется, если при регистрации вам не пришло подтверждающее письмо. Если вы уже зарегистрированы или же еще не успели, то вам выдаст соответствующее сообщение.    
						 	</td>	
						</tr>
					</table>
				</td>	
			</tr>
			<tr id="Met">
				<td>
					<table id="BackGroundOfAllChapter">
						<tr id="BeginingOfChapter">
							<td>
								 Уроки
							</td>
						<tr id="SecondBeginingOfChapter">
							<td>
								<div> Урок по теме "Присваивание"</div>
							</td>
						</tr>
						<tr id="Content">
							<td id="text" colspan="2">
								Первая и основная тема базового программирования - "Присваивание".
								Присваивание это оператор, позволяющий присвоить к переменной, которая стоит перед оператором, значение, которое стоит после оператора. Если вам нужно более подробное объяснение этой темы, нажмите на стрелку после абзаца. В этой главе будет написано про план, с помощью которого можно будет провести урок по теме "Присваивание".<br> <button id="ButtAssInf" ><img src="pic/arrow.png"></button> <br>
							<div id="AssInf">
								<br>В разных частях программы нередко попадаются одни и те данные — строчки текста или числа. Чтобы каждый раз не писать огромные числа или строки, в языках программирования добавили константы. С помощью константы любому элементу данных — числу или строке — вы можете назначить удобное имя, а затем подставлять это имя вместо самих данных. Прежде, чем применить символическую константу, её надо объявить, то есть дать ей имя и значение. Чтобы объявить константу, перейдите в раздел переменные и нажмите на кнопку "объявить переменную". Как уже было сказано ранее, значением переменной может являться как число, так и строка.
							</div>
								<br> Урок можно начать с объяснения - "Что такое Присваивание?".
							    Далее, приступите к простому заданию. Задание будет заключаться в написании программы, которая будет приветствовать пользователя. <a href="Examples/Присваивание1.zip" id="here" download="">Здесь</a> можно скачать пример задания. Для закрепления пройденного материала предложите ученикам придумать собственное подобное задание и выполнить его самостоятельно. Далее, приступите вместе с учениками к выполнению усложненного задания, которое будет выполнять математическое сложение двух введенных переменных. <a href="Examples/Присваивание2.zip" id="here" download="">Здесь</a> можно скачать задание пример данного задания. После завершения работы, задайте ученикам домашнее задание. Примером может быть совмещение двух ранее сделанных работ - сначала компьютер приветствует пользователя, а потом спрашивает числа, которые будет складывать. Готовый код можно скачать <a href="Examples/ПрисваиваниеДом.zip" id="here" download="">здесь</a>. Если осталось время от урока, приступите к новой теме под названием "Оператор ветвления".
							</td>
						</tr>
						<tr id="SecondBeginingOfChapter">
							<td>
								<div> Урок по теме "Оператор ветвления"</div>
							</td>
						</tr>
						<tr id="Content">
							<td id="text" colspan="2">
								Ещё одна из трёх базовых тем программирования - "Оператор ветвления". Ветвление обеспечивает выполнение команд при соблюдении или не соблюдении кого-либо условия. Если вам нужно более подробное объяснение этой темы, нажмите на стрелку после абзаца. В Снап! этот оператор находится в разделе "Управление". В этой главе будет написано про план, с помощью которого мржно будет провести урок по теме "Ветвление".
								<br> <button id="ButtIfInf" ><img src="pic/arrow.png"></button> <br>
							<div id="IfInf">
								<br>Обычно при выборе чего-либо мы рассуждаем так: <b>ЕСЛИ</b> некоторое утверждение верно, <b>ТО</b> делаем одно, а <b>ИНАЧЕ</b> делаем другое. Например, <b>ЕСЛИ</b> на улице жарко, <b>ТО</b> наденем футболку, а <b>ИНАЧЕ</b> — свитер. Выделенные слова — ключевые в этом рассуждении. Существуют два варианта условного оператора — полный и неполный. Полный оператор выражается тремя ключевыми словами: <b>IF</b> — «если», <b>THEN</b> — «то» и <b>ELSE</b> — «иначе», и записывается он так.<br><br> IF <условие> THEN <Оператор_1> ELSE <Оператор_2> <br><br> Первый оператор выполняется, если условие верно, а второй — если ложно. Стало быть, условный оператор — это сложная конструкция, которая включает в себя другие операторы. В Снап! полный оператор реализован только двумя словами: "если" и "иначе".<br>
								Неполный условный оператор состоит только из "если" и "то". Нет ли дождя? <b>ЕСЛИ</b> дождь идет, <b>ТО</b> прихватите зонтик. В этом кратком рассуждении нет отрицательной ветви, поскольку в ней никаких действий не предусмотрено. В таких случаях отрицательную ветвь отбрасывают и получают неполный условный оператор:<br><br> <b>IF</b> <условие> <b>THEN</b> <Оператор><br><br> В Снап! неполный условный оператор реализован только одним словом - "если".
							</div>
								<br>Урок можно начать с объяснения - "Что такое оператор ветвления и где он используется". Далее, можно выполнить небольшое задание на знание простых математических вычислений, которое будет на практике демонстрировать как работает оператор ветвления. Готовое задание можно скачать <a href="Examples/Ветвление1.zip" id="here" download="">здесь</a>. Далее, для закрепления пройденного, предложите ученикам придумать и выполнить своё собственное задание. После выполненной самостоятельной работы, переходите к заданию, которое является немного усложненной копией первой задачи - в нем добавлено еще одно условие после верного ответа на первый вопрос. <a href="Examples/Ветвление2.zip" id="here" download="">Здесь</a> можно скачать готовое задание. После завершения основной части урока, задайте ученикам домашнее задание. Примером может быть задание, которое совмещает алгоритмы раннее проделанных работ - после верного и неверного ответа будет следовать еще один вопрос. Задание можно скачать <a href="Examples/ВетвлениеДом.zip" id="here" download="">здесь</a>. Если осталось время от урока, переходите к новой теме под названием "Циклы".
							</td>
						</tr>
						<tr id="SecondBeginingOfChapter">
							<td>
								<div>Урок по теме "Циклы"</div>
							</td>
						</tr>
						<tr id="Content">
							<td id="text" colspan="2">
                                Циклы - последняя из трёх базовых тем программирования. Циклы позволяют многократно выполнять одни и те же задачи с помощью одной конструкции. Если вам нужно более подробное объяснение этой темы, нажмите на стрелку после абзаца. В этой главе будет написано про план, с помощью которого можно будет провести урок по теме "Циклы". 
								<br> <button id="ButtCycleInf" ><img src="pic/arrow.png"></button> <br>
							<div id="CycleInf">
								<br>Действие оператора можно изъяснить так: <b>ПОВТОРЯТЬ</b> следующие далее операторы, <b>ПОКА</b> условие <b>НЕ</b> соблюдается. Всё, что находится в теле этого оператора, будет повторяться до того, пока какое либо условие не выполнится. Также в Sn присутствует еще 3 разновидности таких операторов. Первый выполнять действие непрерывно, пока не будет команды остановится. Второй выполнять действие какое-то определенное количество раз. Третий выполнять действие какое-то определенное количество раз, но каждый новый круг изменять ранее поставленную переменную на то числовое значение, на котором сейчас находится цикл. Например, вы запустили цикл для переменной i от 1 до 10. Переменная каждый круг будет на 1. На первом кругу i будет равно 1, на втором 2 и так до десятого круга.
							</div>
                                <br>Урок можно начать с объяснения: "Что такое циклы, и для чего они нужны". В качестве пояснения выполните задание на построение несложной геометрической фигуры. Пример можно скачать <a href="Examples/Циклы1.zip" id="here" download="">здесь</a>. Для закрепления пройденного предложите ученикам выполнить самостоятельно построение простой фигуры. После выполненной самостоятельной работы, переходите к выполнению несложного задания, которое будет проверять знание таблицы умножения, и будет начинать цикл заново, если ответ на вопрос неправильный. <a href="Examples/Циклы2.zip" id="here">Здесь</a> можно скачать пример задания. После выполненной самостоятельной работы задайте ученикам домашнее задание. Примером может служить комбинация уже ранее сделанных заданий - при каждом неправильном ответе, алгоритм будет задавать вопрос заново. При правильном ответе алгоритм будет переходить на следующий вопрос и повторять ранее упомянутую конструкцию. Пример можно скачать <a href="Examples/ЦиклыДом.zip" id="here">здесь</a>.
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
	</body>
