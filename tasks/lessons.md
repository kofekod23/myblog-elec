# Lessons — myblog-elec

## 2026-05-06 | Hook block_main_branch bloque Write sur main
Règle : créer la branche feature AVANT toute modification de fichier.
```bash
git checkout -b feat/<nom>
```
Ne jamais écrire directement sur main dans ce repo.

## 2026-05-06 | Edit tool "string not found" sur fichiers multi-lignes
L'outil Edit échoue si l'old_string contient des caractères encodés différemment de ceux du fichier réel.
Règle : toujours Read le fichier juste avant d'Edit. Pour les remplacements globaux, utiliser `replace_all: true` avec le plus petit contexte possible.

## 2026-05-06 | sed refusé par l'utilisateur
L'utilisateur refuse les outils Bash de manipulation de texte (sed, awk).
Règle : utiliser exclusivement les outils Edit/Write natifs pour toute modification de fichier HTML/CSS/JS.

## 2026-05-06 | Python heredoc dans Bash échoue
`python3 -c "..."` avec des guillemets imbriqués génère des erreurs de syntaxe.
Règle : utiliser `python3 - << 'PYEOF'` (stdin) plutôt que `-c` pour les scripts Python inline.
