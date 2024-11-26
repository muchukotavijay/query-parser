@{%
    const lexer = require("./lexer");
%}

@lexer lexer

comparisonExpression -> expr {% id %}

expr -> 
    operand _ comparisonOperator _ operand
        {%
            ([left, , op, , right]) => {
                const operations = {
                    '=': (a, b) => a == b,
                    '!=': (a, b) => a != b,
                };
                return operations[op](left, right);
            }
        %}

operand -> additive {% id %}

additive 
    -> multiplicative _ additiveOperator _ additive
       {%
            ([left, , op, , right]) => {
                const operations = {
                    '+': (a, b) => a + b,
                    '-': (a, b) => a - b,
                };
                return operations[op](left, right);
            }
        %}
    | multiplicative {% id %}

multiplicative 
    -> number _ multiplicativeOperator _ multiplicative
        {%
            ([left, , op, , right]) => {
                const operations = {
                    '*': (a, b) => a * b,
                    '/': (a, b) => a / b,
                };
                return operations[op](left, right);
            }
        %}
    | number {% id %}

additiveOperator -> %additiveOperator {% id %}
multiplicativeOperator -> %multiplicativeOperator {% id %}
comparisonOperator -> %comparisonOperator {% id %}

number -> %number {% id %}

_ -> %ws