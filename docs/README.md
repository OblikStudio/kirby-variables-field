# kirby-variables-field

Kirby field that allows you to manage langauge variables via the panel. To do that, it uses [kirby-variables](https://github.com/OblikStudio/kirby-variables) to put those variables in YAML files so they're easy to work with.

![Variables editor](editor.png)

## Installation

With [Composer](https://packagist.org/packages/oblik/kirby-variables-field):

```
composer require oblik/kirby-variables-field
```

## Usage

In a blueprint, simply add a new field and set its type to `variables`:

```yml
fields:
  vars:
    type: variables
    label: Variables
```

This will create an editor for all variables where you can add, remove, and sort them.

**Note:** This is a "fake" field and no actual value will be saved in the site/page txt file. All values are saved in the YAML files where the variables reside so it doesn't matter what field name you choose.

## Options

### `variable`

You can specify exactly which variable you want to be editable. For example, if you have this in _bg.yml_:

```yml
test: Тест
greetings:
  hello: Здравей
```

...and this in your blueprint:

```yml
myfield:
  type: variables
  variable: greetings.hello
  label: Hello
```

...you'll get the following result:

![Single variable field](field.png)

In the case above, if you want editors to be able to add new entries in the `greetings` group, you can simply change:

```yml
variable: greetings.hello
```

...to:

```yml
variable: greetings
```

This will show the variable editor instead.

### `editor`

When you haven't set a specific variable to edit and the editor is shown, you can configure it:

```yml
myfield:
  type: variables
  editor:
    sort: false
    mutate: false
```

This plugin uses the JSON editor Vue component provided by the [kirby-json](https://github.com/OblikStudio/kirby-json) dependency. Read what blueprint options it has [here](https://github.com/OblikStudio/kirby-json#field).

## KirbyTag

This plugin also comes with a KirbyTag called `var`. It simply outputs a variable with a fallback default value. For example, in _en.yml_:

```yml
labels:
  test: Test
```

In your content:

```
This is the label (var: labels.test default: Default Value)
```

Result:

```
This is the label Test
```

This is useful because editors now can both set _and_ use variables in the panel, which gives them the option to avoid repeating themselves in the content.
