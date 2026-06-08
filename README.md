<div align="center">

<h1>You Deserve One 💘</h1>

<p><i><code>A secure, on-device encrypted matchmaking platform built exclusively for IIITDMJ</code></i></p>

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)
![Ethers.js](https://img.shields.io/badge/Ethers.js-211B62?style=flat-square&logo=ethers&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

</div>

---
## Project Overview
**You Deserve One (YDO)** bridges the gap of unspoken campus connections by offering a completely safe, anonymous matchmaking platform for students. 

What makes YDO different from a simple form is its ***Anonymity Guarantee:***
*"The database, the developers, and the server infrastructure will never have the mathematical ability to see who a user liked or who matched with whom. Matches are calculated via cryptographic collision."*


---
## Features

YDO is crafted around these core operational pillars:

* **Campus Exclusive Authentication:**<br /> Restricted solely to institutional credentials, login with ***'iiitdmj.ac.in'*** only.<br />
* **Multiple Selections:**<br /> Users can submit up to 3 choices without anyone else knowing.<br />
* **Synchronized Reveal:**<br /> The magic happens simultaneously on February 14th at 00:00 mutual selections instantly reveal a match.<br />
* **No secrets revealed:** <br />Unmatched tokens remain as a one way SHA256 hash in database to guarantee continuous data privacy.<br />
---
## Cryptographic Workflow - <i>'The Heart of YDO'</i>

 

```mermaid
graph LR
    subgraph KEYS ["Step 1 — Key Generation"]
        A[User Signup] --> B[12-word Mnemonic\ngenerated locally]
        B --> C[Keypair Derived\nvia ethers.js]
        C --> D[(Public Key\nusers table)]
        C --> E[Private Key\non device only]
    end

    subgraph HASH ["Step 2 — Zero-Knowledge Submission"]
        F[User A\nlikes User B] --> G[ECDH:\nPrivate Key A +\nPublic Key B]
        G --> H[Shared Secret\non device]
        H --> I[SHA-256\nHash]
        I --> J[(Hash only\nlikes table)]
    end

    subgraph VAULT ["Step 3 — The Vault"]
        K[Plaintext choices\n2024001, 2024045] --> L[AES cipher\nfrom mnemonic]
        L --> M[(Ciphertext\nencrypted_vault)]
    end

    subgraph REVEAL ["Step 4 — Collision and Reveal"]
        N{Midnight:\nServer scan} --> O[Publish hashes\nwith count = 2]
        O --> P[Client runs\nlocal ECDH math]
        P --> Q{Hash match\nfound?}
        Q -->|Yes| R[Match Revealed]
        Q -->|No| S[No match]
    end

    KEYS --> HASH
    HASH --> VAULT
    VAULT --> REVEAL
```


---

## Tech Stack
* **Frontend:**
    * Next.js <br /><br />
* **Backend:**
   * Supabase <br /><br />
* **Authentication:** 
   * Supabase Auth <br /><br />
* **Cryptography:**
  * ethers.js and crypto-js

 ---

## Contributions 
We welcome contributions through the BSoC Contributor Guidelines!<br />
Development tasks are strictly divided into three core domains:<br />

1. Frontend <br />
2. Infrastructure and Database <br />
3. Core logic and Cryptography<br />

Please see our **[CONTRIBUTING.md](CONTRIBUTING.md)** for getting started.


---

## Acknowledgement
We extend our sincere gratitude to:<br />
* All **contributors** who are dedicating their time and effort for shaping YDO.
* The broader **open-source community** for providing invaluable tools, libraries, and inspiration.
* Our beloved TPC ❤️ - The Programming Club, IIITDMJ.

---

## Maintainers & Mentors:
  - Arunit
  <a href="https://github.com/LightCreator1007"><img src="https://img.shields.io/badge/-000?logo=github&logoColor=white&style=flat" align="center"/></a>

   - Sampath
<a href="https://github.com/Sampath-1984"><img src="https://img.shields.io/badge/-000?logo=github&logoColor=white&style=flat" align="center"/></a>

---

~ with 💖 by Team YDO.

