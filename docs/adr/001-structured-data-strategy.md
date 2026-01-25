# ADR 001: Structured Data and Schema.org Strategy

## Date
2026-01-25

## Status
Accepted

## Context
To achieve "Organic Dominance" in Campo Grande (RJ), the website needs to be interpreted by search engines not just as a collection of pages, but as a verified local entity. We needed to decide on a schema architecture that balances local relevance, emergency priority, and Google's technical validation.

## Decision
We implemented a multi-layered Structured Data strategy using JSON-LD with a `@graph` architecture.

### 1. Unified Brand Identity (NAP)
- **Brand Name:** Unified as "Juniauto - Reboque 24h" across all entities.
- **Consistency:** Name, Address, and Phone (NAP) are 100% identical in all scripts and the footer.
- **Entity Linking:** Every page uses the `@id: "https://www.juniauto.com.br/#organization"` to tell Google all pages belong to the same parent entity.

### 2. Strategic Schema Type Selection
We decided against a "one-size-fits-all" type and chose specific types based on user intent:

| Page Type | Schema Type | Rationale |
| :--- | :--- | :--- |
| **Homepage** | `AutomotiveBusiness` | Best for general local business discovery and ranking in the "Map Pack". |
| **Neighborhoods** | `AutomotiveBusiness` | Reinforces local presence in specific districts (e.g., Bangu, Paciência) while serving the provider's address. |
| **Urgent Services** | `EmergencyService` | Used for "Carga de Bateria" and "Pneus". High signal for users in immediate distress. |
| **Towing Services** | `Service` | Used for general towing. Since `TowingService` is not in the core vocabulary, we use `Service` with a specific `serviceType` for 100% validation. |

### 3. Hyper-Local Scope
- **Area Served:** Removed broad "Zona Oeste" tags in favor of granular neighborhood lists and specific landmarks (West Shopping, Avenida Brasil). This prevents "diluting" relevance over too large an area.

## Consequences
- **Positive:** Improved eligibility for Rich Snippets (FAQs, Business Cards).
- **Positive:** Increased trust with Google's Quality Raters due to technical consistency.
- **Positive:** Higher potential for ranking in "near me" (perto de mim) searches in Campo Grande.
- **Neutral:** Any future address or phone changes must be updated globally to maintain the integrity of the graph.
