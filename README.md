# Intercambio Descentralizado de Tokens

Este proyecto implementa un intercambio descentralizado para el intercambio de dos tokens, inspirado en Thorchain. Permite a los usuarios agregar liquidez, retirar liquidez y ejecutar intercambios de manera segura y eficiente.

## Estructura del Proyecto

```
intercambio-descentralizado
├── src
│   ├── token.js          # Lógica principal del intercambio descentralizado
│   ├── contratos
│   │   └── exchange.sol  # Contrato inteligente en Solidity para el intercambio de tokens
│   ├── scripts
│   │   └── deploy.js     # Script para desplegar el contrato inteligente
│   └── tests
│       └── exchange.test.js # Casos de prueba para el contrato inteligente
├── package.json          # Archivo de configuración de npm
├── hardhat.config.js     # Archivo de configuración de Hardhat
└── README.md             # Documentación del proyecto
```

## Instrucciones de Configuración

1. **Clonar el repositorio:**
   ```bash
   git clone <repository-url>
   cd intercambio-descentralizado
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Compilar el contrato inteligente:**
   ```bash
   npx hardhat compile
   ```

4. **Desplegar el contrato inteligente:**
   ```bash
   npx hardhat run src/scripts/deploy.js --network <nombre-de-la-red>
   ```

## Uso

- **Intercambio de Tokens:** Usa las funciones en `src/token.js` para intercambiar tokens.
- **Agregar Liquidez:** Interactúa con el contrato inteligente para agregar liquidez.
- **Retirar Liquidez:** Usa las funciones disponibles para retirar liquidez del intercambio.

## Ejemplos

```javascript
// Ejemplo de intercambio de tokens
const { swapTokens } = require('./src/token');

async function exampleSwap() {
    const result = await swapTokens(tokenA, tokenB, amount);
    console.log(result);
}

exampleSwap();
```

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.

