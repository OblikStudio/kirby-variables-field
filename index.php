<?php
use Easyvars\Handler;

Kirby::plugin('oblik/variables-field', [
	'fields' => [
		'variables' => [
			'props' => [
				'value' => function ($data = null) {
					if ($data) {
						$data = yaml::decode($data);
						$lang = $data['lang'];
						$value = $data['value'];

						if (!empty($this->variable)) {
							$variables = Handler::read($lang);
							Handler::replaceKey($this->variable, $value, $variables);
						} else {
							$variables = $value;
						}

						Handler::write($lang, $variables);
					}

					// Always return null to avoid saving the field value in the txt.
					return null;
				},
				'variable' => function ($value = null) {
					return $value;
				},
				'editable' => function ($value = true) {
					return $value;
				},
				'sortable' => function ($value = true) {
					return $value;
				},
				'resizable' => function ($value = false) {
					return $value;
				},
				'keys' => function ($value = false) {
					return $value;
				}
			],
			'api' => function () {
				return [
					[
						'pattern' => '/variables',
						'method' => 'GET',
						'action' => function () {
							$key = $_GET['key'] ?? null;
							$data = Handler::read($_GET['lang']);

							if ($data && $key) {
								$data = Handler::find($key, $data);
							}

							if ($data !== null) {
								return json_encode($data);
							}

							return false;
						}
					]
				];
			}
		]
	],
	'translations' => [
    'en' => [
    	'key' => 'Key',
    	'value' => 'Value',
      'array' => 'Array',
      'object' => 'Object',
      'loading' => 'Loading',
      'values' => 'values',
    ]
  ]
]);
