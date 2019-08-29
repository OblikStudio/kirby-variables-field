<?php

use Oblik\Variables\Manager;
use Oblik\Variables\Util;

Kirby::plugin('oblik/variables-field', [
	'fields' => [
		'variables' => [
			'props' => [
				'value' => function ($data = null) {
					$lang = kirby()->language()->code();

					if (!$data) {
						$handler = Manager::getHandler($lang);
						$data = $handler->data;

						if (!empty($data)) {
							if ($this->variable) {
								$data = $handler->find($this->variable);
							}
						} else {
							if ($this->variable) {
								$data = '';
							} else {
								$data = [];
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
				$handler = Manager::getHandler($lang);

				if ($this->variable) {
					Util::replace($this->variable, $value, $handler->data, true);
				} else {
					$handler->data = $value;
				}

				$handler->write();
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
