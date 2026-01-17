// ===== CONFIGURATION =====
const TARGET_BTC_PRICE = 1000000; // $1 Million USD target

// ===== DONATION ADDRESSES - REPLACE WITH YOUR OWN =====
const DONATION_CONFIG = {
    btcAddress: 'YOUR_BTC_ADDRESS_HERE',  // Replace with your Bitcoin address
    lightningAddress: 'YOUR_LIGHTNING_ADDRESS_HERE'  // Replace with your Lightning address or LNURL
};

// ===== TRANSLATIONS =====
const TRANSLATIONS = {
    CZ: {
        title: "Kalkulačka skutečných nákladů",
        tagline: "Podívejte se, co by vaše denní požitky mohly být, kdybyste je investovali do Bitcoinu",
        liveBtcPrice: "Aktuální cena BTC",
        targetPrice: "Cílová cena",
        targetEstimate: "Odhad: ~2030-2032",
        growthMultiple: "Násobek růstu",
        yourCountry: "Vaše země:",
        clickItems: "Klikněte na položky, které pravidelně konzumujete",
        instruction: "Každé kliknutí přidá jednu jednotku. Podívejte se na skutečné náklady!",
        opportunityCost: "Vaše ušlá příležitost",
        emptyState: "Klikněte na položky výše pro zobrazení nákladů",
        totalSpent: "Celkem utraceno dnes:",
        btcYouCouldBuy: "BTC, které byste mohli koupit:",
        valueAtTarget: "Hodnota při $1M BTC:",
        youArePaying: "Ve skutečnosti \"platíte\":",
        more: "× více",
        resetSelection: "Obnovit výběr",
        projectOverTime: "Projekce v čase",
        daily: "Denně",
        weekly: "Týdně",
        monthly: "Měsíčně",
        yearly: "Ročně",
        periodCost: "Náklady za období:",
        btcAccumulated: "Nashromážděné BTC:",
        futureValue: "Budoucí hodnota:",
        lastUpdated: "Poslední aktualizace:",
        loading: "Načítání...",
        error: "Chyba načítání ceny",
        donationTitle: "Podpořte tento projekt",
        donationSubtitle: "Pokud vám kalkulačka pomohla, zvažte poslání pár satoshi!",
        lightning: "Lightning",
        onchain: "On-chain",
        sendBitcoin: "Poslat Bitcoin",
        sendLightning: "Poslat přes Lightning",
        addressLabel: "Adresa:",
        copyAddress: "Kopírovat adresu",
        copied: "Zkopírováno!",
        donationThanks: "Děkujeme za podporu! 🧡",
        items: {
            cigarettes: "Cigarety (krabička)",
            beer_pub: "Pivo v hospodě",
            beer_store: "Pivo (obchod)",
            coffee: "Espresso",
            cappuccino: "Cappuccino",
            bigmac: "Big Mac",
            fastfood: "Fast food menu",
            lottery: "Los",
            shot: "Panák",
            energy: "Energetický nápoj",
            soda: "Limonáda",
            candy: "Čokoládová tyčinka",
            chips: "Chipsy/Snacky",
            wine: "Sklenka vína",
            cocktail: "Koktejl",
            vape: "Náplň do e-cigarety"
        }
    },
    US: {
        title: "The Real Cost Calculator",
        tagline: "See what your daily indulgences could become if you invested in Bitcoin instead",
        liveBtcPrice: "Live BTC Price",
        targetPrice: "Target Price",
        targetEstimate: "Est: ~2030-2032",
        growthMultiple: "Growth Multiple",
        yourCountry: "Your Country:",
        clickItems: "Click items you consume regularly",
        instruction: "Each click adds one unit. See the real opportunity cost!",
        opportunityCost: "Your Opportunity Cost",
        emptyState: "Click items above to see the cost",
        totalSpent: "Total Spent Today:",
        btcYouCouldBuy: "BTC You Could Buy:",
        valueAtTarget: "Value at $1M BTC:",
        youArePaying: "You're \"paying\":",
        more: "x more",
        resetSelection: "Reset Selection",
        projectOverTime: "Project Over Time",
        daily: "Daily",
        weekly: "Weekly",
        monthly: "Monthly",
        yearly: "Yearly",
        periodCost: "Period Cost:",
        btcAccumulated: "BTC Accumulated:",
        futureValue: "Future Value:",
        lastUpdated: "Last updated:",
        loading: "Loading...",
        error: "Error loading price",
        donationTitle: "Support this project",
        donationSubtitle: "If this calculator helped you, consider sending some sats!",
        lightning: "Lightning",
        onchain: "On-chain",
        sendBitcoin: "Send Bitcoin",
        sendLightning: "Send via Lightning",
        addressLabel: "Address:",
        copyAddress: "Copy Address",
        copied: "Copied!",
        donationThanks: "Thank you for your support! 🧡",
        items: {
            cigarettes: "Cigarettes (pack)",
            beer_pub: "Beer at Bar",
            beer_store: "Beer (store)",
            coffee: "Coffee",
            cappuccino: "Latte",
            bigmac: "Big Mac",
            fastfood: "Fast Food Meal",
            lottery: "Lottery Ticket",
            shot: "Shot of Liquor",
            energy: "Energy Drink",
            soda: "Soda",
            candy: "Candy Bar",
            chips: "Chips/Snacks",
            wine: "Glass of Wine",
            cocktail: "Cocktail",
            vape: "Vape Juice"
        }
    },
    GB: {
        title: "The Real Cost Calculator",
        tagline: "See what your daily indulgences could become if you invested in Bitcoin instead",
        liveBtcPrice: "Live BTC Price",
        targetPrice: "Target Price",
        targetEstimate: "Est: ~2030-2032",
        growthMultiple: "Growth Multiple",
        yourCountry: "Your Country:",
        clickItems: "Click items you consume regularly",
        instruction: "Each click adds one unit. See the real opportunity cost!",
        opportunityCost: "Your Opportunity Cost",
        emptyState: "Click items above to see the cost",
        totalSpent: "Total Spent Today:",
        btcYouCouldBuy: "BTC You Could Buy:",
        valueAtTarget: "Value at £1M BTC:",
        youArePaying: "You're \"paying\":",
        more: "x more",
        resetSelection: "Reset Selection",
        projectOverTime: "Project Over Time",
        daily: "Daily",
        weekly: "Weekly",
        monthly: "Monthly",
        yearly: "Yearly",
        periodCost: "Period Cost:",
        btcAccumulated: "BTC Accumulated:",
        futureValue: "Future Value:",
        lastUpdated: "Last updated:",
        loading: "Loading...",
        error: "Error loading price",
        donationTitle: "Support this project",
        donationSubtitle: "If this calculator helped you, consider sending some sats!",
        lightning: "Lightning",
        onchain: "On-chain",
        sendBitcoin: "Send Bitcoin",
        sendLightning: "Send via Lightning",
        addressLabel: "Address:",
        copyAddress: "Copy Address",
        copied: "Copied!",
        donationThanks: "Thank you for your support! 🧡",
        items: {
            cigarettes: "Cigarettes (pack)",
            beer_pub: "Beer at Pub",
            beer_store: "Beer (shop)",
            coffee: "Coffee",
            cappuccino: "Latte",
            bigmac: "Big Mac",
            fastfood: "Fast Food Meal",
            lottery: "Lottery Ticket",
            shot: "Shot of Liquor",
            energy: "Energy Drink",
            soda: "Fizzy Drink",
            candy: "Chocolate Bar",
            chips: "Crisps/Snacks",
            wine: "Glass of Wine",
            cocktail: "Cocktail",
            vape: "Vape Juice"
        }
    },
    EU: {
        title: "The Real Cost Calculator",
        tagline: "See what your daily indulgences could become if you invested in Bitcoin instead",
        liveBtcPrice: "Live BTC Price",
        targetPrice: "Target Price",
        targetEstimate: "Est: ~2030-2032",
        growthMultiple: "Growth Multiple",
        yourCountry: "Your Country:",
        clickItems: "Click items you consume regularly",
        instruction: "Each click adds one unit. See the real opportunity cost!",
        opportunityCost: "Your Opportunity Cost",
        emptyState: "Click items above to see the cost",
        totalSpent: "Total Spent Today:",
        btcYouCouldBuy: "BTC You Could Buy:",
        valueAtTarget: "Value at $1M BTC:",
        youArePaying: "You're \"paying\":",
        more: "x more",
        resetSelection: "Reset Selection",
        projectOverTime: "Project Over Time",
        daily: "Daily",
        weekly: "Weekly",
        monthly: "Monthly",
        yearly: "Yearly",
        periodCost: "Period Cost:",
        btcAccumulated: "BTC Accumulated:",
        futureValue: "Future Value:",
        lastUpdated: "Last updated:",
        loading: "Loading...",
        error: "Error loading price",
        donationTitle: "Support this project",
        donationSubtitle: "If this calculator helped you, consider sending some sats!",
        lightning: "Lightning",
        onchain: "On-chain",
        sendBitcoin: "Send Bitcoin",
        sendLightning: "Send via Lightning",
        addressLabel: "Address:",
        copyAddress: "Copy Address",
        copied: "Copied!",
        donationThanks: "Thank you for your support! 🧡",
        items: {
            cigarettes: "Cigarettes (pack)",
            beer_pub: "Beer at Bar",
            beer_store: "Beer (store)",
            coffee: "Espresso",
            cappuccino: "Cappuccino",
            bigmac: "Big Mac",
            fastfood: "Fast Food Meal",
            lottery: "Lottery Ticket",
            shot: "Shot of Liquor",
            energy: "Energy Drink",
            soda: "Soda",
            candy: "Candy Bar",
            chips: "Chips/Snacks",
            wine: "Glass of Wine",
            cocktail: "Cocktail",
            vape: "Vape Juice"
        }
    },
    FR: {
        title: "Calculateur du coût réel",
        tagline: "Découvrez ce que vos plaisirs quotidiens pourraient devenir si vous les investissiez en Bitcoin",
        liveBtcPrice: "Prix BTC en direct",
        targetPrice: "Prix cible",
        targetEstimate: "Est: ~2030-2032",
        growthMultiple: "Multiple de croissance",
        yourCountry: "Votre pays:",
        clickItems: "Cliquez sur les articles que vous consommez régulièrement",
        instruction: "Chaque clic ajoute une unité. Voyez le vrai coût d'opportunité!",
        opportunityCost: "Votre coût d'opportunité",
        emptyState: "Cliquez sur les articles ci-dessus pour voir le coût",
        totalSpent: "Total dépensé aujourd'hui:",
        btcYouCouldBuy: "BTC que vous pourriez acheter:",
        valueAtTarget: "Valeur à $1M BTC:",
        youArePaying: "Vous \"payez\":",
        more: "x plus",
        resetSelection: "Réinitialiser",
        projectOverTime: "Projection dans le temps",
        daily: "Quotidien",
        weekly: "Hebdomadaire",
        monthly: "Mensuel",
        yearly: "Annuel",
        periodCost: "Coût de la période:",
        btcAccumulated: "BTC accumulés:",
        futureValue: "Valeur future:",
        lastUpdated: "Dernière mise à jour:",
        loading: "Chargement...",
        error: "Erreur de chargement",
        donationTitle: "Soutenir ce projet",
        donationSubtitle: "Si ce calculateur vous a aidé, envoyez quelques sats!",
        lightning: "Lightning",
        onchain: "On-chain",
        sendBitcoin: "Envoyer Bitcoin",
        sendLightning: "Envoyer via Lightning",
        addressLabel: "Adresse:",
        copyAddress: "Copier l'adresse",
        copied: "Copié!",
        donationThanks: "Merci pour votre soutien! 🧡",
        items: {
            cigarettes: "Cigarettes (paquet)",
            beer_pub: "Bière au bar",
            beer_store: "Bière (magasin)",
            coffee: "Expresso",
            cappuccino: "Cappuccino",
            bigmac: "Big Mac",
            fastfood: "Menu fast-food",
            lottery: "Ticket de loterie",
            shot: "Shot d'alcool",
            energy: "Boisson énergisante",
            soda: "Soda",
            candy: "Barre chocolatée",
            chips: "Chips/Snacks",
            wine: "Verre de vin",
            cocktail: "Cocktail",
            vape: "E-liquide"
        }
    },
    IT: {
        title: "Calcolatore del costo reale",
        tagline: "Scopri cosa potrebbero diventare i tuoi piaceri quotidiani se li investissi in Bitcoin",
        liveBtcPrice: "Prezzo BTC in tempo reale",
        targetPrice: "Prezzo obiettivo",
        targetEstimate: "Stima: ~2030-2032",
        growthMultiple: "Multiplo di crescita",
        yourCountry: "Il tuo paese:",
        clickItems: "Clicca sugli articoli che consumi regolarmente",
        instruction: "Ogni clic aggiunge un'unità. Scopri il vero costo opportunità!",
        opportunityCost: "Il tuo costo opportunità",
        emptyState: "Clicca sugli articoli sopra per vedere il costo",
        totalSpent: "Totale speso oggi:",
        btcYouCouldBuy: "BTC che potresti comprare:",
        valueAtTarget: "Valore a $1M BTC:",
        youArePaying: "Stai \"pagando\":",
        more: "x di più",
        resetSelection: "Reimposta",
        projectOverTime: "Proiezione nel tempo",
        daily: "Giornaliero",
        weekly: "Settimanale",
        monthly: "Mensile",
        yearly: "Annuale",
        periodCost: "Costo del periodo:",
        btcAccumulated: "BTC accumulati:",
        futureValue: "Valore futuro:",
        lastUpdated: "Ultimo aggiornamento:",
        loading: "Caricamento...",
        error: "Errore di caricamento",
        donationTitle: "Sostieni questo progetto",
        donationSubtitle: "Se questo calcolatore ti ha aiutato, invia qualche sat!",
        lightning: "Lightning",
        onchain: "On-chain",
        sendBitcoin: "Invia Bitcoin",
        sendLightning: "Invia via Lightning",
        addressLabel: "Indirizzo:",
        copyAddress: "Copia indirizzo",
        copied: "Copiato!",
        donationThanks: "Grazie per il tuo supporto! 🧡",
        items: {
            cigarettes: "Sigarette (pacchetto)",
            beer_pub: "Birra al bar",
            beer_store: "Birra (negozio)",
            coffee: "Espresso",
            cappuccino: "Cappuccino",
            bigmac: "Big Mac",
            fastfood: "Menu fast food",
            lottery: "Biglietto lotteria",
            shot: "Shot di liquore",
            energy: "Energy drink",
            soda: "Bibita",
            candy: "Barretta di cioccolato",
            chips: "Patatine/Snack",
            wine: "Bicchiere di vino",
            cocktail: "Cocktail",
            vape: "Liquido per sigaretta elettronica"
        }
    },
    PL: {
        title: "Kalkulator prawdziwych kosztów",
        tagline: "Zobacz, ile mogłyby być warte Twoje codzienne przyjemności, gdybyś zainwestował w Bitcoin",
        liveBtcPrice: "Aktualna cena BTC",
        targetPrice: "Cena docelowa",
        targetEstimate: "Szacunek: ~2030-2032",
        growthMultiple: "Mnożnik wzrostu",
        yourCountry: "Twój kraj:",
        clickItems: "Kliknij produkty, które regularnie konsumujesz",
        instruction: "Każde kliknięcie dodaje jedną jednostkę. Zobacz prawdziwy koszt alternatywny!",
        opportunityCost: "Twój koszt alternatywny",
        emptyState: "Kliknij produkty powyżej, aby zobaczyć koszt",
        totalSpent: "Wydano dziś:",
        btcYouCouldBuy: "BTC, które mógłbyś kupić:",
        valueAtTarget: "Wartość przy $1M BTC:",
        youArePaying: "W rzeczywistości \"płacisz\":",
        more: "x więcej",
        resetSelection: "Resetuj wybór",
        projectOverTime: "Projekcja w czasie",
        daily: "Dziennie",
        weekly: "Tygodniowo",
        monthly: "Miesięcznie",
        yearly: "Rocznie",
        periodCost: "Koszt okresu:",
        btcAccumulated: "Zgromadzone BTC:",
        futureValue: "Przyszła wartość:",
        lastUpdated: "Ostatnia aktualizacja:",
        loading: "Ładowanie...",
        error: "Błąd ładowania ceny",
        donationTitle: "Wesprzyj ten projekt",
        donationSubtitle: "Jeśli kalkulator Ci pomógł, rozważ wysłanie kilku satoshi!",
        lightning: "Lightning",
        onchain: "On-chain",
        sendBitcoin: "Wyślij Bitcoin",
        sendLightning: "Wyślij przez Lightning",
        addressLabel: "Adres:",
        copyAddress: "Kopiuj adres",
        copied: "Skopiowano!",
        donationThanks: "Dziękujemy za wsparcie! 🧡",
        items: {
            cigarettes: "Papierosy (paczka)",
            beer_pub: "Piwo w barze",
            beer_store: "Piwo (sklep)",
            coffee: "Kawa",
            cappuccino: "Cappuccino",
            bigmac: "Big Mac",
            fastfood: "Zestaw fast food",
            lottery: "Los na loterię",
            shot: "Kieliszek wódki",
            energy: "Napój energetyczny",
            soda: "Napój gazowany",
            candy: "Baton czekoladowy",
            chips: "Chipsy/Przekąski",
            wine: "Kieliszek wina",
            cocktail: "Koktajl",
            vape: "Liquid do e-papierosa"
        }
    },
    DE: {
        title: "Der echte Kostenrechner",
        tagline: "Sehen Sie, was Ihre täglichen Genüsse werden könnten, wenn Sie stattdessen in Bitcoin investieren",
        liveBtcPrice: "Aktueller BTC-Preis",
        targetPrice: "Zielpreis",
        targetEstimate: "Schätzung: ~2030-2032",
        growthMultiple: "Wachstumsfaktor",
        yourCountry: "Ihr Land:",
        clickItems: "Klicken Sie auf Artikel, die Sie regelmäßig konsumieren",
        instruction: "Jeder Klick fügt eine Einheit hinzu. Sehen Sie die echten Opportunitätskosten!",
        opportunityCost: "Ihre Opportunitätskosten",
        emptyState: "Klicken Sie oben auf Artikel, um die Kosten zu sehen",
        totalSpent: "Heute ausgegeben:",
        btcYouCouldBuy: "BTC, die Sie kaufen könnten:",
        valueAtTarget: "Wert bei $1M BTC:",
        youArePaying: "Sie \"zahlen\":",
        more: "x mehr",
        resetSelection: "Auswahl zurücksetzen",
        projectOverTime: "Zeitliche Projektion",
        daily: "Täglich",
        weekly: "Wöchentlich",
        monthly: "Monatlich",
        yearly: "Jährlich",
        periodCost: "Periodenkosten:",
        btcAccumulated: "Angesammelte BTC:",
        futureValue: "Zukünftiger Wert:",
        lastUpdated: "Zuletzt aktualisiert:",
        loading: "Laden...",
        error: "Fehler beim Laden",
        donationTitle: "Unterstützen Sie dieses Projekt",
        donationSubtitle: "Wenn Ihnen dieser Rechner geholfen hat, senden Sie ein paar Sats!",
        lightning: "Lightning",
        onchain: "On-chain",
        sendBitcoin: "Bitcoin senden",
        sendLightning: "Per Lightning senden",
        addressLabel: "Adresse:",
        copyAddress: "Adresse kopieren",
        copied: "Kopiert!",
        donationThanks: "Vielen Dank für Ihre Unterstützung! 🧡",
        items: {
            cigarettes: "Zigaretten (Packung)",
            beer_pub: "Bier in der Kneipe",
            beer_store: "Bier (Laden)",
            coffee: "Kaffee",
            cappuccino: "Cappuccino",
            bigmac: "Big Mac",
            fastfood: "Fast-Food-Menü",
            lottery: "Lottoschein",
            shot: "Schnaps",
            energy: "Energy-Drink",
            soda: "Limonade",
            candy: "Schokoriegel",
            chips: "Chips/Snacks",
            wine: "Glas Wein",
            cocktail: "Cocktail",
            vape: "Vape-Liquid"
        }
    },
    SK: {
        title: "Kalkulačka skutočných nákladov",
        tagline: "Pozrite sa, čo by vaše denné pôžitky mohli byť, keby ste ich investovali do Bitcoinu",
        liveBtcPrice: "Aktuálna cena BTC",
        targetPrice: "Cieľová cena",
        targetEstimate: "Odhad: ~2030-2032",
        growthMultiple: "Násobok rastu",
        yourCountry: "Vaša krajina:",
        clickItems: "Kliknite na položky, ktoré pravidelne konzumujete",
        instruction: "Každé kliknutie pridá jednu jednotku. Pozrite sa na skutočné náklady!",
        opportunityCost: "Vaša ušlá príležitosť",
        emptyState: "Kliknite na položky vyššie pre zobrazenie nákladov",
        totalSpent: "Celkom minuté dnes:",
        btcYouCouldBuy: "BTC, ktoré by ste mohli kúpiť:",
        valueAtTarget: "Hodnota pri $1M BTC:",
        youArePaying: "V skutočnosti \"platíte\":",
        more: "× viac",
        resetSelection: "Obnoviť výber",
        projectOverTime: "Projekcia v čase",
        daily: "Denne",
        weekly: "Týždenne",
        monthly: "Mesačne",
        yearly: "Ročne",
        periodCost: "Náklady za obdobie:",
        btcAccumulated: "Nahromadené BTC:",
        futureValue: "Budúca hodnota:",
        lastUpdated: "Posledná aktualizácia:",
        loading: "Načítava sa...",
        error: "Chyba načítania ceny",
        donationTitle: "Podporte tento projekt",
        donationSubtitle: "Ak vám kalkulačka pomohla, zvážte poslanie pár satoshi!",
        lightning: "Lightning",
        onchain: "On-chain",
        sendBitcoin: "Poslať Bitcoin",
        sendLightning: "Poslať cez Lightning",
        addressLabel: "Adresa:",
        copyAddress: "Kopírovať adresu",
        copied: "Skopírované!",
        donationThanks: "Ďakujeme za podporu! 🧡",
        items: {
            cigarettes: "Cigarety (krabička)",
            beer_pub: "Pivo v krčme",
            beer_store: "Pivo (obchod)",
            coffee: "Espresso",
            cappuccino: "Cappuccino",
            bigmac: "Big Mac",
            fastfood: "Fast food menu",
            lottery: "Žreb",
            shot: "Pohárik",
            energy: "Energetický nápoj",
            soda: "Limonáda",
            candy: "Čokoládová tyčinka",
            chips: "Chipsy/Snacky",
            wine: "Pohár vína",
            cocktail: "Koktejl",
            vape: "Náplň do e-cigarety"
        }
    },
    HU: {
        title: "A valódi költség kalkulátor",
        tagline: "Nézze meg, mivé válhatna napi élvezeteinek értéke, ha Bitcoinba fektetné",
        liveBtcPrice: "Aktuális BTC ár",
        targetPrice: "Célár",
        targetEstimate: "Becslés: ~2030-2032",
        growthMultiple: "Növekedési szorzó",
        yourCountry: "Az Ön országa:",
        clickItems: "Kattintson a rendszeresen fogyasztott termékekre",
        instruction: "Minden kattintás egy egységet ad hozzá. Nézze meg a valódi alternatív költséget!",
        opportunityCost: "Az Ön alternatív költsége",
        emptyState: "Kattintson a fenti elemekre a költség megtekintéséhez",
        totalSpent: "Ma elköltött összeg:",
        btcYouCouldBuy: "Vásárolható BTC:",
        valueAtTarget: "Érték $1M BTC-nél:",
        youArePaying: "Valójában ennyit \"fizet\":",
        more: "x többet",
        resetSelection: "Kiválasztás törlése",
        projectOverTime: "Időbeli vetítés",
        daily: "Naponta",
        weekly: "Hetente",
        monthly: "Havonta",
        yearly: "Évente",
        periodCost: "Időszak költsége:",
        btcAccumulated: "Felhalmozott BTC:",
        futureValue: "Jövőbeli érték:",
        lastUpdated: "Utoljára frissítve:",
        loading: "Betöltés...",
        error: "Hiba az ár betöltésekor",
        donationTitle: "Támogassa ezt a projektet",
        donationSubtitle: "Ha hasznos volt a kalkulátor, küldjön néhány satoshit!",
        lightning: "Lightning",
        onchain: "On-chain",
        sendBitcoin: "Bitcoin küldése",
        sendLightning: "Küldés Lightningon",
        addressLabel: "Cím:",
        copyAddress: "Cím másolása",
        copied: "Másolva!",
        donationThanks: "Köszönjük a támogatást! 🧡",
        items: {
            cigarettes: "Cigaretta (csomag)",
            beer_pub: "Sör a kocsmában",
            beer_store: "Sör (bolt)",
            coffee: "Eszpresszó",
            cappuccino: "Cappuccino",
            bigmac: "Big Mac",
            fastfood: "Gyorséttermi menü",
            lottery: "Lottószelvény",
            shot: "Pálinka",
            energy: "Energiaital",
            soda: "Üdítő",
            candy: "Csokiszelet",
            chips: "Chips/Snack",
            wine: "Pohár bor",
            cocktail: "Koktél",
            vape: "Vape folyadék"
        }
    }
};

// Country configurations with local prices
const COUNTRIES = {
    CZ: {
        name: "Czech Republic",
        currency: "CZK",
        symbol: "Kč",
        locale: "cs-CZ",
        flag: "🇨🇿",
        items: {
            cigarettes: { price: 155, icon: "🚬" },
            beer_pub: { price: 73, icon: "🍺" },
            beer_store: { price: 20, icon: "🍻" },
            coffee: { price: 60, icon: "☕" },
            cappuccino: { price: 85, icon: "☕" },
            bigmac: { price: 109, icon: "🍔" },
            fastfood: { price: 200, icon: "🍟" },
            lottery: { price: 25, icon: "🎰" },
            shot: { price: 50, icon: "🥃" },
            energy: { price: 45, icon: "⚡" },
            soda: { price: 35, icon: "🥤" },
            candy: { price: 25, icon: "🍫" },
            chips: { price: 40, icon: "🥨" },
            wine: { price: 80, icon: "🍷" },
            cocktail: { price: 180, icon: "🍹" },
            vape: { price: 200, icon: "💨" }
        }
    },
    US: {
        name: "United States",
        currency: "USD",
        symbol: "$",
        locale: "en-US",
        flag: "🇺🇸",
        items: {
            cigarettes: { price: 8.50, icon: "🚬" },
            beer_pub: { price: 7, icon: "🍺" },
            beer_store: { price: 2.50, icon: "🍻" },
            coffee: { price: 3.50, icon: "☕" },
            cappuccino: { price: 5.50, icon: "☕" },
            bigmac: { price: 5.69, icon: "🍔" },
            fastfood: { price: 12, icon: "🍟" },
            lottery: { price: 2, icon: "🎰" },
            shot: { price: 8, icon: "🥃" },
            energy: { price: 3.50, icon: "⚡" },
            soda: { price: 2.50, icon: "🥤" },
            candy: { price: 2, icon: "🍫" },
            chips: { price: 4, icon: "🥨" },
            wine: { price: 12, icon: "🍷" },
            cocktail: { price: 15, icon: "🍹" },
            vape: { price: 25, icon: "💨" }
        }
    },
    GB: {
        name: "United Kingdom",
        currency: "GBP",
        symbol: "£",
        locale: "en-GB",
        flag: "🇬🇧",
        items: {
            cigarettes: { price: 14, icon: "🚬" },
            beer_pub: { price: 6, icon: "🍺" },
            beer_store: { price: 2, icon: "🍻" },
            coffee: { price: 3.20, icon: "☕" },
            cappuccino: { price: 4.50, icon: "☕" },
            bigmac: { price: 4.49, icon: "🍔" },
            fastfood: { price: 8, icon: "🍟" },
            lottery: { price: 2, icon: "🎰" },
            shot: { price: 4, icon: "🥃" },
            energy: { price: 2, icon: "⚡" },
            soda: { price: 1.80, icon: "🥤" },
            candy: { price: 1.20, icon: "🍫" },
            chips: { price: 2, icon: "🥨" },
            wine: { price: 7, icon: "🍷" },
            cocktail: { price: 12, icon: "🍹" },
            vape: { price: 15, icon: "💨" }
        }
    },
    EU: {
        name: "Eurozone",
        currency: "EUR",
        symbol: "€",
        locale: "en-EU",
        flag: "🇪🇺",
        items: {
            cigarettes: { price: 7, icon: "🚬" },
            beer_pub: { price: 5, icon: "🍺" },
            beer_store: { price: 1.50, icon: "🍻" },
            coffee: { price: 2.50, icon: "☕" },
            cappuccino: { price: 4, icon: "☕" },
            bigmac: { price: 5.29, icon: "🍔" },
            fastfood: { price: 10, icon: "🍟" },
            lottery: { price: 2.50, icon: "🎰" },
            shot: { price: 4, icon: "🥃" },
            energy: { price: 2.50, icon: "⚡" },
            soda: { price: 2, icon: "🥤" },
            candy: { price: 1.50, icon: "🍫" },
            chips: { price: 2.50, icon: "🥨" },
            wine: { price: 5, icon: "🍷" },
            cocktail: { price: 10, icon: "🍹" },
            vape: { price: 15, icon: "💨" }
        }
    },
    FR: {
        name: "France",
        currency: "EUR",
        symbol: "€",
        locale: "fr-FR",
        flag: "🇫🇷",
        items: {
            cigarettes: { price: 12, icon: "🚬" },
            beer_pub: { price: 7, icon: "🍺" },
            beer_store: { price: 2, icon: "🍻" },
            coffee: { price: 2, icon: "☕" },
            cappuccino: { price: 4.50, icon: "☕" },
            bigmac: { price: 5.50, icon: "🍔" },
            fastfood: { price: 11, icon: "🍟" },
            lottery: { price: 3, icon: "🎰" },
            shot: { price: 5, icon: "🥃" },
            energy: { price: 2.50, icon: "⚡" },
            soda: { price: 2.50, icon: "🥤" },
            candy: { price: 1.80, icon: "🍫" },
            chips: { price: 3, icon: "🥨" },
            wine: { price: 5, icon: "🍷" },
            cocktail: { price: 12, icon: "🍹" },
            vape: { price: 8, icon: "💨" }
        }
    },
    IT: {
        name: "Italy",
        currency: "EUR",
        symbol: "€",
        locale: "it-IT",
        flag: "🇮🇹",
        items: {
            cigarettes: { price: 6, icon: "🚬" },
            beer_pub: { price: 5, icon: "🍺" },
            beer_store: { price: 1.50, icon: "🍻" },
            coffee: { price: 1.20, icon: "☕" },
            cappuccino: { price: 1.80, icon: "☕" },
            bigmac: { price: 5.20, icon: "🍔" },
            fastfood: { price: 9, icon: "🍟" },
            lottery: { price: 2, icon: "🎰" },
            shot: { price: 3, icon: "🥃" },
            energy: { price: 2, icon: "⚡" },
            soda: { price: 2, icon: "🥤" },
            candy: { price: 1.50, icon: "🍫" },
            chips: { price: 2.50, icon: "🥨" },
            wine: { price: 4, icon: "🍷" },
            cocktail: { price: 10, icon: "🍹" },
            vape: { price: 10, icon: "💨" }
        }
    },
    PL: {
        name: "Poland",
        currency: "PLN",
        symbol: "zł",
        locale: "pl-PL",
        flag: "🇵🇱",
        items: {
            cigarettes: { price: 22, icon: "🚬" },
            beer_pub: { price: 15, icon: "🍺" },
            beer_store: { price: 4, icon: "🍻" },
            coffee: { price: 12, icon: "☕" },
            cappuccino: { price: 18, icon: "☕" },
            bigmac: { price: 21, icon: "🍔" },
            fastfood: { price: 35, icon: "🍟" },
            lottery: { price: 3, icon: "🎰" },
            shot: { price: 10, icon: "🥃" },
            energy: { price: 7, icon: "⚡" },
            soda: { price: 5, icon: "🥤" },
            candy: { price: 4, icon: "🍫" },
            chips: { price: 8, icon: "🥨" },
            wine: { price: 20, icon: "🍷" },
            cocktail: { price: 35, icon: "🍹" },
            vape: { price: 50, icon: "💨" }
        }
    },
    DE: {
        name: "Germany",
        currency: "EUR",
        symbol: "€",
        locale: "de-DE",
        flag: "🇩🇪",
        items: {
            cigarettes: { price: 8, icon: "🚬" },
            beer_pub: { price: 4.50, icon: "🍺" },
            beer_store: { price: 1, icon: "🍻" },
            coffee: { price: 3, icon: "☕" },
            cappuccino: { price: 4.50, icon: "☕" },
            bigmac: { price: 5.29, icon: "🍔" },
            fastfood: { price: 10, icon: "🍟" },
            lottery: { price: 1.20, icon: "🎰" },
            shot: { price: 3, icon: "🥃" },
            energy: { price: 2, icon: "⚡" },
            soda: { price: 2, icon: "🥤" },
            candy: { price: 1.20, icon: "🍫" },
            chips: { price: 2, icon: "🥨" },
            wine: { price: 5, icon: "🍷" },
            cocktail: { price: 10, icon: "🍹" },
            vape: { price: 12, icon: "💨" }
        }
    },
    SK: {
        name: "Slovakia",
        currency: "EUR",
        symbol: "€",
        locale: "sk-SK",
        flag: "🇸🇰",
        items: {
            cigarettes: { price: 5, icon: "🚬" },
            beer_pub: { price: 2.50, icon: "🍺" },
            beer_store: { price: 0.80, icon: "🍻" },
            coffee: { price: 1.80, icon: "☕" },
            cappuccino: { price: 2.80, icon: "☕" },
            bigmac: { price: 4.50, icon: "🍔" },
            fastfood: { price: 8, icon: "🍟" },
            lottery: { price: 1, icon: "🎰" },
            shot: { price: 2, icon: "🥃" },
            energy: { price: 1.50, icon: "⚡" },
            soda: { price: 1.20, icon: "🥤" },
            candy: { price: 0.80, icon: "🍫" },
            chips: { price: 1.50, icon: "🥨" },
            wine: { price: 3, icon: "🍷" },
            cocktail: { price: 7, icon: "🍹" },
            vape: { price: 10, icon: "💨" }
        }
    },
    HU: {
        name: "Hungary",
        currency: "HUF",
        symbol: "Ft",
        locale: "hu-HU",
        flag: "🇭🇺",
        items: {
            cigarettes: { price: 2200, icon: "🚬" },
            beer_pub: { price: 900, icon: "🍺" },
            beer_store: { price: 400, icon: "🍻" },
            coffee: { price: 600, icon: "☕" },
            cappuccino: { price: 900, icon: "☕" },
            bigmac: { price: 1800, icon: "🍔" },
            fastfood: { price: 3500, icon: "🍟" },
            lottery: { price: 300, icon: "🎰" },
            shot: { price: 600, icon: "🥃" },
            energy: { price: 500, icon: "⚡" },
            soda: { price: 400, icon: "🥤" },
            candy: { price: 300, icon: "🍫" },
            chips: { price: 500, icon: "🥨" },
            wine: { price: 800, icon: "🍷" },
            cocktail: { price: 2500, icon: "🍹" },
            vape: { price: 4000, icon: "💨" }
        }
    }
};

// ===== STATE =====
let currentCountry = 'CZ';
let btcPriceUSD = null;
let exchangeRates = {};
let selectedItems = {};
let selectedDays = 1;
let currentCategory = 'all';

// ===== TRANSLATION HELPER =====
function t(key) {
    return TRANSLATIONS[currentCountry][key] || TRANSLATIONS['US'][key] || key;
}

function getItemName(itemKey) {
    return TRANSLATIONS[currentCountry].items[itemKey] || TRANSLATIONS['US'].items[itemKey] || itemKey;
}

// ===== UPDATE UI LANGUAGE =====
function updateLanguage() {
    // Header
    document.querySelector('header h1').textContent = t('title');
    document.querySelector('.tagline').textContent = t('tagline');

    // Price banner
    document.querySelectorAll('.price-item')[0].querySelector('.label').textContent = t('liveBtcPrice');
    document.querySelectorAll('.price-item')[1].querySelector('.label').textContent = t('targetPrice');
    document.getElementById('target-estimate').textContent = t('targetEstimate');
    document.querySelectorAll('.price-item')[2].querySelector('.label').textContent = t('growthMultiple');
    document.querySelector('.country-selector label').textContent = t('yourCountry');

    // Indulgence section
    document.querySelector('.indulgence-section h2').textContent = t('clickItems');
    document.querySelector('.instruction').textContent = t('instruction');

    // Results panel
    document.querySelector('.results-panel h2').textContent = t('opportunityCost');

    // Totals labels
    const totalLabels = document.querySelectorAll('.total-label');
    totalLabels[0].textContent = t('totalSpent');
    totalLabels[1].textContent = t('btcYouCouldBuy');
    totalLabels[2].textContent = t('valueAtTarget');
    totalLabels[3].textContent = t('youArePaying');

    // Reset button
    document.getElementById('reset-btn').textContent = t('resetSelection');

    // Time calculator
    document.querySelector('.time-calculator h3').textContent = t('projectOverTime');
    const timeBtns = document.querySelectorAll('.time-btn');
    timeBtns[0].textContent = t('daily');
    timeBtns[1].textContent = t('weekly');
    timeBtns[2].textContent = t('monthly');
    timeBtns[3].textContent = t('yearly');

    const timeLabels = document.querySelectorAll('.time-label');
    timeLabels[0].textContent = t('periodCost');
    timeLabels[1].textContent = t('btcAccumulated');
    timeLabels[2].textContent = t('futureValue');

    // Donation section
    document.getElementById('donation-title').textContent = t('donationTitle');
    document.getElementById('donation-subtitle').textContent = t('donationSubtitle');
    document.getElementById('lightning-text').textContent = t('lightning');
    document.getElementById('onchain-text').textContent = t('onchain');
    document.getElementById('address-label').textContent = t('addressLabel');
    document.getElementById('copy-text').textContent = t('copyAddress');
    document.getElementById('donation-note').textContent = t('donationThanks');

    // Update page title
    document.title = t('title') + ' | BTC';
}

// ===== API FUNCTIONS =====
async function fetchBTCPrice() {
    try {
        document.getElementById('btc-price-display').textContent = t('loading');
        const currencies = ['usd', 'czk', 'eur', 'gbp', 'pln', 'huf'].join(',');
        const response = await fetch(
            `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currencies}`
        );
        const data = await response.json();

        btcPriceUSD = data.bitcoin.usd;
        exchangeRates = {
            USD: data.bitcoin.usd,
            CZK: data.bitcoin.czk,
            EUR: data.bitcoin.eur,
            GBP: data.bitcoin.gbp,
            PLN: data.bitcoin.pln,
            HUF: data.bitcoin.huf
        };

        updateBTCDisplay();
        updateResults();
        document.getElementById('last-updated').textContent = `${t('lastUpdated')} ${new Date().toLocaleTimeString(COUNTRIES[currentCountry].locale)}`;
    } catch (error) {
        console.error('Error fetching BTC price:', error);
        document.getElementById('btc-price-display').textContent = t('error');
    }
}

// ===== UI FUNCTIONS =====
function formatCurrency(amount, countryCode = currentCountry) {
    const country = COUNTRIES[countryCode];

    if (Math.abs(amount) >= 1000000) {
        return country.symbol + (amount / 1000000).toFixed(2) + 'M';
    } else if (Math.abs(amount) >= 1000) {
        return new Intl.NumberFormat(country.locale, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount) + ' ' + country.symbol;
    }

    return new Intl.NumberFormat(country.locale, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount) + ' ' + country.symbol;
}

function updateBTCDisplay() {
    if (!btcPriceUSD) return;

    const country = COUNTRIES[currentCountry];
    const btcPrice = exchangeRates[country.currency] || btcPriceUSD;

    document.getElementById('btc-price-display').textContent = formatCurrency(btcPrice);

    const growthMultiple = (TARGET_BTC_PRICE / btcPriceUSD).toFixed(1);
    document.getElementById('growth-multiple').textContent = growthMultiple + 'x';
}

function getItemsForCategory(category) {
    if (category === 'all') {
        return Object.keys(COUNTRIES[currentCountry].items);
    }
    return CATEGORIES[category]?.items || [];
}

function renderItems() {
    const grid = document.getElementById('items-grid');
    const country = COUNTRIES[currentCountry];
    const itemKeys = getItemsForCategory(currentCategory);

    grid.innerHTML = '';

    for (const key of itemKeys) {
        const item = country.items[key];
        if (!item) continue;

        const quantity = selectedItems[key] || 0;
        const div = document.createElement('div');
        div.className = `item-card ${quantity > 0 ? 'selected' : ''}`;
        div.dataset.key = key;

        const iconSvg = ICONS[key] || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/></svg>`;

        div.innerHTML = `
            <div class="item-icon">${iconSvg}</div>
            <div class="item-name">${getItemName(key)}</div>
            <div class="item-price">${formatCurrency(item.price)}</div>
            ${quantity > 0 ? `<div class="item-quantity">${quantity}</div>` : ''}
            ${quantity > 0 ? `<button class="remove-btn" data-key="${key}">−</button>` : ''}
        `;

        div.addEventListener('click', (e) => {
            if (!e.target.classList.contains('remove-btn')) {
                addItem(key);
            }
        });

        grid.appendChild(div);
    }

    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            removeItem(e.target.dataset.key);
        });
    });
}

function addItem(key) {
    selectedItems[key] = (selectedItems[key] || 0) + 1;
    renderItems();
    updateResults();
}

function removeItem(key) {
    if (selectedItems[key] > 1) {
        selectedItems[key]--;
    } else {
        delete selectedItems[key];
    }
    renderItems();
    updateResults();
}

function updateResults() {
    if (!btcPriceUSD) return;

    const country = COUNTRIES[currentCountry];
    const btcPriceLocal = exchangeRates[country.currency] || btcPriceUSD;
    const targetPriceLocal = (TARGET_BTC_PRICE / btcPriceUSD) * btcPriceLocal;

    let totalSpent = 0;
    const selectedItemsContainer = document.getElementById('selected-items');

    if (Object.keys(selectedItems).length === 0) {
        selectedItemsContainer.innerHTML = `<p class="empty-state">${t('emptyState')}</p>`;
    } else {
        let itemsHtml = '';
        for (const [key, quantity] of Object.entries(selectedItems)) {
            const item = country.items[key];
            const itemTotal = item.price * quantity;
            totalSpent += itemTotal;
            const iconSvg = ICONS[key] || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/></svg>`;
            itemsHtml += `
                <div class="selected-item">
                    <span class="sel-icon">${iconSvg}</span>
                    <span class="sel-name">${getItemName(key)}</span>
                    <span class="sel-qty">×${quantity}</span>
                    <span class="sel-price">${formatCurrency(itemTotal)}</span>
                </div>
            `;
        }
        selectedItemsContainer.innerHTML = itemsHtml;
    }

    const btcAmount = totalSpent / btcPriceLocal;
    const futureValue = btcAmount * targetPriceLocal;
    const multiple = totalSpent > 0 ? (futureValue / totalSpent).toFixed(0) : 0;

    document.getElementById('total-spent').textContent = formatCurrency(totalSpent);
    document.getElementById('btc-amount').textContent = btcAmount.toFixed(8) + ' BTC';
    document.getElementById('future-value').textContent = formatCurrency(futureValue);
    document.getElementById('real-cost-multiple').textContent = multiple + t('more');

    updateTimePeriod(totalSpent, btcPriceLocal, targetPriceLocal);
}

function updateTimePeriod(dailyTotal, btcPriceLocal, targetPriceLocal) {
    const periodTotal = dailyTotal * selectedDays;
    const periodBtc = periodTotal / btcPriceLocal;
    const periodFuture = periodBtc * targetPriceLocal;

    document.getElementById('period-cost').textContent = formatCurrency(periodTotal);
    document.getElementById('period-btc').textContent = periodBtc.toFixed(8) + ' BTC';
    document.getElementById('period-future').textContent = formatCurrency(periodFuture);
}

function changeCountry(countryCode) {
    currentCountry = countryCode;
    selectedItems = {};
    currentCategory = 'all';
    updateLanguage();
    updateCategoryTabs();
    renderItems();
    updateBTCDisplay();
    updateResults();
}

function updateCategoryTabs() {
    const tabs = document.querySelectorAll('.category-tab');
    const catTrans = CATEGORY_TRANSLATIONS[currentCountry] || CATEGORY_TRANSLATIONS['US'];

    tabs.forEach(tab => {
        const category = tab.dataset.category;
        const span = tab.querySelector('span');
        if (span && catTrans[category]) {
            span.textContent = catTrans[category];
        }
        tab.classList.toggle('active', category === currentCategory);
    });
}

function setCategory(category) {
    currentCategory = category;
    updateCategoryTabs();
    renderItems();
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('country-select').addEventListener('change', (e) => {
        changeCountry(e.target.value);
    });

    document.getElementById('reset-btn').addEventListener('click', () => {
        selectedItems = {};
        renderItems();
        updateResults();
    });

    document.querySelectorAll('.time-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            selectedDays = parseInt(e.target.dataset.days);
            updateResults();
        });
    });

    // Category tabs
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            setCategory(tab.dataset.category);
        });
    });

    updateLanguage();
    updateCategoryTabs();
    renderItems();
    fetchBTCPrice();
    setInterval(fetchBTCPrice, 60000);

    // Donation modal handlers
    const modal = document.getElementById('donation-modal');
    const modalTitle = document.getElementById('modal-title');
    const btcAddressEl = document.getElementById('btc-address');
    const qrCode = document.getElementById('qr-code');

    document.getElementById('lightning-btn').addEventListener('click', () => {
        modalTitle.textContent = t('sendLightning');
        btcAddressEl.textContent = DONATION_CONFIG.lightningAddress;
        qrCode.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(DONATION_CONFIG.lightningAddress)}" alt="Lightning QR">`;
        modal.classList.add('active');
    });

    document.getElementById('btc-btn').addEventListener('click', () => {
        modalTitle.textContent = t('sendBitcoin');
        btcAddressEl.textContent = DONATION_CONFIG.btcAddress;
        qrCode.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=bitcoin:${DONATION_CONFIG.btcAddress}" alt="Bitcoin QR">`;
        modal.classList.add('active');
    });

    document.getElementById('modal-close').addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });

    document.getElementById('copy-btn').addEventListener('click', () => {
        const address = btcAddressEl.textContent;
        navigator.clipboard.writeText(address).then(() => {
            const copyBtn = document.getElementById('copy-btn');
            const copyText = document.getElementById('copy-text');
            copyBtn.classList.add('copied');
            copyText.textContent = t('copied');
            setTimeout(() => {
                copyBtn.classList.remove('copied');
                copyText.textContent = t('copyAddress');
            }, 2000);
        });
    });
});
