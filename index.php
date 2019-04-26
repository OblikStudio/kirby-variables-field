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

						// Put the data in an inflated array so it can be merged.
						$inflated = Handler::inflate([
							$this->variable => $data['value']
						]);

						Handler::modify($lang, $inflated);
					}

					// Always return null to avoid saving the field value in the txt.
					return null;
				},
				'variable' => function ($value) {
					return $value;
				}
			],
			'api' => function () {
				return [
					[
						'pattern' => '/variable',
						'method' => 'GET',
						'action' => function () {
							$data = Handler::read($_GET['lang']);

							if ($data) {
								$value = Handler::find($_GET['key'], $data);

								if ($value !== null) {
									return json_encode($value);
								}
							}

							return false;
						}
					]
				];
			}
		]
	]
]);
