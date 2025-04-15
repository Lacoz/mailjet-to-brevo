# mailjet-to-brevo

A command-line tool to convert Mailjet email templates to Brevo format. This utility converts MJML templates with Mailjet syntax to HTML with Brevo syntax.

## Features

- Converts MJML templates to HTML
- Automatically transforms Mailjet variable syntax to Brevo syntax
- Extracts template variables for preview purposes
- Generates preview data for both Mailjet and Brevo formats
- Identifies unconvertible patterns


## Usage

### Basic Usage

Convert an MJML file to HTML:

```bash
npx mailjet-to-brevo convert path/to/template.mjml
```

### Specify Output Path

```bash
npx mailjet-to-brevo convert path/to/template.mjml path/to/output.html
```

### Options

- `--strict`: Use strict validation (fails on unconvertible patterns)
- `--save-preview`: Save template variable preview data as JSON

```bash
npx mailjet-to-brevo convert path/to/template.mjml --save-preview
```

## Syntax Conversion

This tool automatically converts Mailjet template syntax to Brevo syntax:

| Mailjet | Brevo |
|---------|-------|
| `{{var:VARNAME:"default"}}` | `{{params.VARNAME\|default:"default"}}` |
| `{{variable}}` | `{{params.variable}}` |
| `{% if var:variable == "value" %}` | `{% if params.variable == "value" %}` |
| `{% elseif condition %}` | `{% elif condition %}` |
| `{% for item in var:items %}` | `{% for item in params.items %}` |

## License

ISC