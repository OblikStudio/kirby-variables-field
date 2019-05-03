<?php

return [
	'attr' => [
		'default'
	],
	'html' => function ($tag) {
		return t($tag->value) ?? $tag->default ?? '';
	}
];
