<?php
use Easyvars\Handler;

Kirby::plugin('oblik/variables-field', [
	'fields' => [
		'variables' => [
			'props' => [
				'value' => function ($data = null) {
					$lang = kirby()->language()->code();

					if (!$data) {
						$data = Handler::read($lang);

						if (!empty($data)) {
							if ($this->variable) {
								$data = Handler::find($this->variable, $data);
							}
						} else {
							if ($this->variable) {
								$data = '';
							} else {
								$data = (object)[];
							}
						}
					}

					return $data;
				},
				'variable' => function ($value = null) {
					return $value;
				},
				'editor' => function ($value = []) {
					return array_replace([
						'keys' => false,
						'values' => true,
						'mutate' => true,
						'sort' => true
					], $value);
				}
			],
			'save' => function ($value) {
				$lang = kirby()->language()->code();
				$variables = $value;

				if ($this->variable) {
					$variables = Handler::read($lang);
					Handler::replaceKey($this->variable, $value, $variables, true);
				}

				Handler::write($lang, $variables);
				return null;
			}
		]
	],
	'tags' => [
		'var' => require __DIR__ . DS . 'src' . DS . 'tag.php'
	],
	'translations' => [
		'en' => require __DIR__ . DS . 'localization' . DS . 'en.php'
	]
]);
