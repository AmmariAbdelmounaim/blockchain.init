# Projet Next.js avec Smart Contract Ethereum
> Une application décentralisée (dApp) utilisant Next.js, Hardhat et Wagmi

## 🌟 Fonctionnalités

- Interface utilisateur moderne avec Next.js
- Smart Contract Ethereum pour le stockage de données
- Intégration avec MetaMask
- Tests automatisés pour le Smart Contract
- Configuration Hardhat pour le développement local

## 🛠 Technologies Utilisées

- **Frontend**:
  - Next.js 15.1
  - React 19.0
  - TailwindCSS
  - Wagmi/Viem pour l'interaction blockchain

- **Backend/Blockchain**:
  - Hardhat
  - Solidity 0.8.19
  - Ethers.js

## 📋 Prérequis

- Node.js (version récente)
- MetaMask installé dans votre navigateur
- Git

## 🚀 Installation

1. Clonez le dépôt :

2. Installez les dépendances :
```bash
npm install
```

3. Lancez la blockchain locale Hardhat :
```bash
npx hardhat node
```

4. Dans un nouveau terminal, déployez le smart contract :
```bash
cd blockchain
npx hardhat ignition deploy modules/IncredibleStorage.ts --network localhost
```

5. Lancez l'application :
```bash
npm run dev
```

## 📝 Structure du Projet

```
.
├── app/                    # Application Next.js
├── blockchain/            # Smart Contracts et configuration Hardhat
│   ├── contracts/        # Smart Contracts Solidity
│   ├── test/            # Tests des Smart Contracts
│   └── ignition/        # Modules de déploiement
├── components/           # Composants React
└── config/              # Configuration (wagmi, etc.)
```

## 🔍 Fonctionnalités Principales

### Smart Contract IncredibleStorage

Le contrat permet de :
- Stocker une valeur numérique
- Lire la valeur stockée
- Modifier la valeur via une transaction

Référence au contrat :

```1:18:blockchain/contracts/incredibleStorage.sol
//SPDX-License-Identifier: MIT
pragma solidity >=0.4.16 < 0.9.0;

contract IncredibleStorage {
    uint awesomeUInt;

    constructor(uint _awesomeUInt) {
        awesomeUInt = _awesomeUInt;
    }

    function set(uint x) public {
        awesomeUInt = x;
    }

    function get() public view returns (uint) {
        return awesomeUInt;
    }
}
```


### Interface Utilisateur

L'application permet aux utilisateurs de :
- Se connecter avec MetaMask
- Voir la valeur actuelle stockée
- Modifier la valeur via un formulaire

## 🧪 Tests

Pour exécuter les tests du smart contract :

```bash
cd blockchain
npx hardhat test
```
## ⚠️ Note

Ce projet est configuré pour fonctionner avec une blockchain locale Hardhat. Pour le déploiement en production, des modifications supplémentaires seront nécessaires.

