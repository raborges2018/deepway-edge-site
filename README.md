
# DeepWay: Edge Trader MAC SUP

Sistema completo de monitoramento e análise de criptoativos com base no **Método Águia Cripto (MAC)**, integrando indicadores técnicos tradicionais, estratégia 3X iterativa, validação estatística rigorosa e arquitetura escalável para execução em tempo real.

---

## 📌 Objetivo

Desenvolver um sistema automatizado e inteligente para análise e operação no mercado de Futuros da Binance, monitorando 58 ativos cripto com foco em:

- Identificação de oportunidades de entrada via **Score MAC**
- Mitigação de perdas com a **Estratégia 3X Iterativa**
- Gestão de risco com transferência dinâmica entre **Futures ↔ Spot**
- Infraestrutura escalável e modular com microserviços

---

## 🧠 Estratégia de IA (Aplicação com Custo-Benefício Real)

- **Otimização de Parâmetros Técnicos** (RSI, Bollinger Bands, etc.)
- **Detecção Avançada de Padrões com LSTM**
- **Gestão de Risco com Modelos Preditivos**
- IA **não é usada** na lógica central, execução de ordens ou frontend.

---

## 🏗️ Arquitetura Técnica

### Backend (Python + FastAPI)
- `FastAPI`, `SQLAlchemy`, `Celery`, `Redis`, `PostgreSQL`, `ccxt`

### Frontend (React + TypeScript)
- `React 18`, `TypeScript`, `TradingView Charting Library`, `React Query`

### Infraestrutura
- `Docker`, `AWS`, `Nginx`, `Prometheus`, `Grafana`, `ELK Stack`

---

## 🔧 Microserviços

- `Data Collector`: coleta e normaliza dados da Binance
- `MAC Engine`: calcula Score MAC e detecta sinais
- `Risk Manager`: gerencia exposição e alertas
- `Order Executor`: executa ordens com lógica “Reduce Only”
- `Notification Service`: envia alertas via Telegram/WhatsApp

---

## 💰 Custos Estimados

| Item                    | Valor Estimado |
|-------------------------|----------------|
| Desenvolvimento         | US$ 12.500     |
| Infraestrutura (ano)    | US$ 17.860     |
| Contingência (20%)      | US$ 2.172      |
| **Total 1º Ano**        | **US$ 35.532** |

---

## 🚀 Roadmap (10 meses)

1. **Validação Histórica do MAC**
2. **Implementação da Estratégia 3X**
3. **Backend em Tempo Real**
4. **Frontend estilo TradingView**
5. **Integração + Testes + Deploy**

---

## 📊 Validação dos Ativos

- Lista inicial: 58 ativos
- Win rate médio esperado: **58–65%**
- Sharpe ratio esperado: **1.2–1.8**
- Critérios mínimos por ativo: Win Rate > 55%, Sharpe > 1.0, Profit Factor > 1.3

---

## 📂 Repositório

- `/backend`: lógica MAC, APIs e serviços
- `/database`: scripts SQL e modelos
- `/docs`: documentação técnica e operacional
- `crypto_mac_deploy_final.pdf`: plano detalhado completo

---

## 🤝 Parceria

Sistema desenvolvido em parceria com a Manus AI, utilizando IA de forma estratégica, validada e transparente.

---

## 🔒 Licença

Este projeto é confidencial e protegido. Todos os direitos reservados.
