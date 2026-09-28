# JWX Token Official Website

Zweisprachige statische Website für GitHub Pages. Die veröffentlichte Domain ist:

`https://jwxtokenofficial.github.io/`

## Seitenstruktur

- `/` – Sprachauswahl und `x-default`
- `/de/` – vollständige deutsche Website
- `/en/` – vollständige englische Website
- je Sprache: Home, About, Technology, Tokenomics, Roadmap, Team, Insights, fünf Artikel und FAQ
- `sitemap.xml` und `robots.txt`

## Direkt auf GitHub Pages veröffentlichen

1. Den Inhalt dieses Ordners in das Stammverzeichnis des Repositorys `JWXTokenofficial.github.io` hochladen.
2. In GitHub unter **Settings → Pages** die Quelle **Deploy from a branch** wählen.
3. Branch **main** und Ordner **/(root)** einstellen.
4. Nach der Veröffentlichung `https://jwxtokenofficial.github.io/sitemap.xml` in der Google Search Console einreichen.

Die HTML-Dateien sind bereits generiert. Python ist für die Veröffentlichung nicht erforderlich. `build.py` und `content.py` dienen nur dazu, die statischen Seiten nach Inhaltsänderungen erneut zu erzeugen.

## Inhalte aktualisieren

1. Textdaten in `content.py` bearbeiten.
2. `python build.py` ausführen.
3. `python -m unittest discover -s tests -v` ausführen.
4. Die neu generierten Dateien hochladen.

## Quellen und redaktionelle Einordnung

- `https://www.jwxgroup.site/`, abgerufen am 28.09.2026
- deutsches JWX-Whitepaper v1.0, von der ursprünglichen Website abgerufen am 28.09.2026

Projektangaben zu Partnerschaften, Umlaufmenge, Systemleistung und Roadmap werden nicht als unabhängig bestätigte Tatsachen ausgegeben. Die Originalunterlagen verwenden für das KI-System sowohl „Dream“ als auch „Ultron“; diese uneinheitliche Benennung wird auf der Website transparent erklärt. Vor der Veröffentlichung neuer wirtschaftlicher, rechtlicher oder technischer Aussagen sollten aktuelle Primärnachweise ergänzt werden.

