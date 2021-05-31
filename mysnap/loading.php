
			<div id="loading">
				<table class="loading-table" align="center" cellpadding="10">
					<tr>
						<td >
							<form enctype="multipart/form-data" action="index.php" method="POST">
				    			<!-- Поле MAX_FILE_SIZE должно быть указано до поля загрузки файла -->
				    		<input type="hidden" name="MAX_FILE_SIZE" value="300000000000000000000" />
				    			<!-- Название элемента input определяет имя в массиве $_FILES -->
				    		Загрузить файл: <input name="userfile" type="file" id="file-choose" /><br>
				   	 			<input type="submit" name="otpr" value="Отправить файл" id="file-send" /><br>
							</form>
							<?php
								if(isset($_POST["otpr"]))
								{
									$uploaddir = '../Examples/';
									$uploadfile = $uploaddir . basename(urlencode($_FILES['userfile']['name']));

									$filesname =  $_FILES['userfile']['name'];
									$url_filesname = urlencode($filesname);
									$ext = array_pop(explode(".", $filesname));
									$whitelist = array('xml');
									if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile))
									{
										if (in_array($ext, $whitelist))
		                               				        {
		                                    					$path_parts = pathinfo("../Examples/".$url_filesname."");
								    			rename("../Examples/".$url_filesname."", "../Examples/".$filesname."");
								    			file_put_contents("../Examples/EXAMPLES", urldecode($url_filesname) . "\t" . urldecode($path_parts['filename']) . "\n", FILE_APPEND);?>
											<script type="text/javascript">
								    			var name = '<?php echo $filesname;?>';
								    			if (name != '') {
													window.open('http://snap.school830.ru#run:Examples/' + name, '_blank');
													} </script><?php
		                               					}
										else
										{
		                           					?> <script type="text/javascript"> alert("не соответствует расширение файла");</script><?php
		                               					}
									}
								}
                                			?>
							<span id="close"></span>
						</td>
					</tr>
					<tr>
						<td>
							Чтобы запустить урок:<br>
								1. Нажмите на кнопку выбора файла.<br>
								2. Добавьте файл двойным нажатием по нему (файл должен обязательно содержать расширение ".xml").<br>
								3. Нажмите кнопку "Отправить файл".<br><br>
							После отправки файла откроется новая вкладка с запущенным уроком. Для запуска урока повторно не нужно заходить на сайт и загружать его. В самом Снап! перейдите в меню файлов --> Открыть...--> Проекты. Нажмите на строку поиска два раза и введите название своего файла. После того как файл найден, кликните на него дважды и он откроется. Для запуска нажмите на кнопку с зеленым флажком. Для увеличения нажмите на кнопку рядом. 
						</td>
					</tr>
				</table>
			</div>
