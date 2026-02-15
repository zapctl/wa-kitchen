function beautifyCode(code) {
    if (!code) return code;

    let formatted = code;

    // Adiciona espaços após vírgulas (exceto em números decimais)
    formatted = formatted.replace(/,(?!\d)(?!\s)/g, ', ');

    // Adiciona espaços ao redor de operadores
    formatted = formatted.replace(/([^=!<>:])=([^=])/g, '$1 = $2');
    formatted = formatted.replace(/([^=!<>])(==|===|!=|!==)([^=])/g, '$1 $2 $3');

    // Adiciona espaços após palavras-chave (if, for, while, return, etc)
    formatted = formatted.replace(/\b(if|for|while|switch|catch)\(/g, '$1 (');

    // Adiciona espaço após : em propriedades de objetos
    formatted = formatted.replace(/([a-zA-Z_$][a-zA-Z0-9_$]*):(?!\s)/g, '$1: ');

    // Protege objetos vazios de serem expandidos
    formatted = formatted.replace(/\{\s*\}/g, '{}');

    // Adiciona quebras de linha após pontos e vírgulas
    formatted = formatted.replace(/;(?!\n)/g, ';\n');

    // Adiciona espaço antes de 'return' após condições if inline (sem quebrar linha)
    formatted = formatted.replace(/\)return\s/g, ') return ');

    // Quebra antes de declarações após }
    formatted = formatted.replace(/}(function|var|let|const|if|for|while|return|[a-z])/g, '}\n$1');

    // Adiciona quebra de linha após { (exceto {})
    formatted = formatted.replace(/\{(?!})/g, '{\n');

    // Adiciona quebra antes de } (exceto {})
    formatted = formatted.replace(/(?<!{)}/g, '\n}');

    // Formata ternários: mantém ? na mesma linha, mas quebra antes do : do ternário
    formatted = formatted.replace(/\s*\?\s*/g, ' ? ');

    // Quebra antes de : em ternários (quando precedido por ) ou } - captura múltiplos fechamentos)
    formatted = formatted.replace(/([)\}]+)\s*:/g, '$1\n: ');

    // Mas mantém : em objetos literais (propriedade: valor já foi tratado acima)

    // Quebra vírgulas em objetos (mas evita parâmetros de função)
    // Só quebra vírgula se não estiver entre parênteses de função
    formatted = formatted.split('\n').map(line => {
        // Não mexe em linhas que parecem ser parâmetros de função
        if (/^function/.test(line.trim()) || /^\(/.test(line.trim())) {
            return line;
        }
        // Quebra vírgulas em objetos literais
        return line.replace(/,(?=(?:[^()]*\([^()]*\))*[^()]*{)/g, ',\n');
    }).join('\n');

    // Remove múltiplas quebras de linha consecutivas
    formatted = formatted.replace(/\n{3,}/g, '\n\n');

    // Adiciona indentação inteligente
    let indentLevel = 0;
    const lines = formatted.split('\n');
    const indented = [];

    for (let i = 0; i < lines.length; i++) {
        const trimmed = lines[i].trim();
        if (!trimmed) {
            indented.push('');
            continue;
        }

        // Calcula mudança de indentação ANTES da linha
        let preDecrease = 0;
        if (trimmed.startsWith('}') || trimmed.startsWith(')') || trimmed.startsWith(']')) {
            preDecrease = 1;
        }
        if (trimmed.startsWith(':') && i > 0 && lines[i-1].includes('?')) {
            preDecrease = 1;
        }

        indentLevel = Math.max(0, indentLevel - preDecrease);
        const indentedLine = '  '.repeat(indentLevel) + trimmed;
        indented.push(indentedLine);

        // Calcula mudança de indentação DEPOIS da linha
        const opens = (trimmed.match(/[{(\[]/g) || []).length;
        const closes = (trimmed.match(/[}\])]/g) || []).length;
        const netChange = opens - closes;

        // Aumenta indent após linha com ?
        if (trimmed.includes('?') && !trimmed.includes(':')) {
            indentLevel++;
        }
        // Após :, volta ao normal
        else if (trimmed.startsWith(':')) {
            indentLevel--;
        }

        indentLevel += netChange;
        indentLevel = Math.max(0, indentLevel);
    }

    return indented.join('\n');
}

function getSMaxInOutModules() {
    const modulesMap = require("__debug").modulesMap;

    return Object.fromEntries(Object.keys(modulesMap)
        .filter(key => /^WASmax(In|Out)/.test(key))
        .filter(key => !/(Enums|RPC)$/.test(key))
        .map(moduleName => [moduleName, beautifyCode(modulesMap[moduleName].factory?.toString())])
        .filter(res => res[1])
        .sort(([a, b]) => a[0].localeCompare(b[0])));
}

return getSMaxInOutModules();