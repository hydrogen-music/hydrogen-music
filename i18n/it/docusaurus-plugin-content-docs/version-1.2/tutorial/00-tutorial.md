---
title: "Tutorial di Hydrogen"
sidebar_label: "Tutorial di Hydrogen"
---

Antonio Piraino
Ok, avete scaricato l'ultima versione di Hydrogen e l'avete installata con successo. Ora volete provare a usare il programma per ricreare la vostra canzone preferita, questo puo' essere utile per aiutarvi ad impararla, mettendo nero su bianco alcuni passaggi difficili per poterli ripetere fino all'esaurimento o per assicurarvi che in un futuro un'occhiata al file vi aiuti a ricordare velocemente come suonare quella canzone. Hydrogen puo' anche essere usato semplicemente come un «click» evoluto che, insieme a un pattern di base (che vi potete create a parte), vi aiuti a prendere pratica con la batteria (velocita', precisione ma anche studio dei rudimenti). Questo tutorial rappresenta quindi un compendio al manuale e cerchera' di guidare l'utente di Hydrogen nella creazione di un canzone completa partendo da zero e l'uso del programma per altri scopi: in questa sede verra' analizzata la canzone "Georgy Porgy" dei Toto che e' abbastanza lineare come struttura e quindi piu' adatta per una guida. Questo comunque non significa che sia una canzone _facile_ da riprendere fedelmente poiche' il batterista (il grande Jeff Porcaro) arricchisce il groove con una miriade di aggiunte personali e con un 'tocco' senza paragoni. Dal momento che Hydrogen non suonera' meglio del batterista che alla tastiera gli passa le istruzioni, e' evidente che parte del lavoro va fatto dalla persona stessa, guidato dalla propria sensibilita' ed esperienza tecnica.

Indice
1. Si comincia1. Intro2. Prima strofa3. Bridge e seguenti4. Il Riff5. L'altra meta' della canzone6. Il riff finale
Indice
1. Intro2. Prima strofa3. Bridge e seguenti4. Il Riff5. L'altra meta' della canzone6. Il riff finale
Prima di iniziare la stesura della canzone assicuratevi di avere alcuni strumenti necessari:

- La canzone da studiare: puo' andar bene un cd-audio ma sarebbe preferibile scaricarla sul PC in formato .ogg o .mp3 per una maggior flessibilita'.
- Opzionalmente anche uno spartito di batteria oppure mettere su carta una struttura di massima per quella canzone: puo' far comodo controllare il numero delle battute o le varie parti del pezzo musicale che si inseriranno in Hydrogen.

La canzone in esame ha la seguente struttura:

- **Intro:** 4 battute
- **Strofa:** 8 battute
- **Bridge:** 8 battute
- **Strofa:** 8 battute
- **Bridge:** 8 battute
- **Ritornello:** 8 battute
- **Riff:** 4 battute
- **Strofa (con chitarra):** 8 battute
- **Strofa (con voce):** 8 battute
- **Bridge:** 8 battute
- **Ritornello:** 8 battute
- **Ritornello:** 8 battute
- **Ritornello:** 8 battute
- **Riff finale:** 4 battute

Da questo schema si evidenzia come alcuni pattern si ripetono nella canzone quindi useremo questa legenda, tornera' comodo con Hydrogen:

- Verse -> A
- Bridge -> B
- Chorus -> C

E per accorciare le spiegazioni useremo anche questi due classici TLA (Three Letters Acronym ^_^):

- LMB: left mouse button
- RMB: right mouse button

Bene, adesso staccate il telefono e lanciate Hydrogen dalla shell: e' il momento di mettersi al lavoro!

Il pattern base (Fig. 1 e 2) e' di 4 battute (suddivise in 2 battute differenti ciascuna ripetuta per due volte, quindi [2a*2]+[2b*2]), e dura per tutto il pezzo, dall'inizio alla fine, riff inclusi; nella maggior parte dei casi (escluso l'intro e i riff) questo pattern base viene ripetuto 2 volte per arrivare alle classiche 8 battute per ciascuna parte (A,B,C) del brano. Prima di tutto pero' due piccole operazioni preliminari: settate la velocita' a 98 bpm (SUGGERIMENTO: potete scoprire da voi la velocita' della canzone mettendola in esecuzione col vostro player preferito e tenendo il tempo col tasto backslash di Hydrogen) e dal menu «Grid Resolution» selezionate '16'. Per creare il pattern selezionate lo strumento «Closed HH», click su RMB e scegliete «Fill Notes»: le due battute correntemente visualizzate saranno riempite di sedicesimi, voila'! Inserite poi a mano i colpi di rullante e di cassa come indicato nelle due figure sottostanti e abbiamo ottenuto il ritmo base per la nostra canzone. Notare come i colpi sul charleston siano accentati in maniera differenziata: i colpi che cascano sui quarti hanno un'intensita' di [0.78], gli altri di [0.50] (visualizzata nella barra di stato in fondo alla schermata del programma), in maniera da vivacizzare la resa globale del pezzo.

![Fig. 1Il pattern base, prima battuta. ](/img/docs/tutorial/PatternBase1.png)

![Fig. 2Il pattern base, seconda battuta. ](/img/docs/tutorial/PatternBase2.png)

Prima di cominciare la stesura delle strofe ci sono le 4 battute di intro, tutte uguali, eccezion fatta per la quarta che in fondo ha l'apertura del charleston. La procedura quindi e':

- Rinominare il primo pattern nel Song Editor con clic di RMB sul nome «Empty Pattern» sostituendolo, per esempio, con «intro_a».
- Aggiungere altre due crocette accanto alla prima (che rappresentano rispettivamente la seconda e la terza battuta)
- Create nel Pattern Editor il pattern base (Fig. 1)

Per la quarta battuta invece c'e' da aggiungere l'apertura del charleston; si puo' procedere cosi' (Fig. 3):

- Click di RMB Nel Song Editor sul pattern appena creato, scegliere «copy», scegliere un nome (es. «intro_b») e automaticamente ne verra' creato uno gemello proprio sotto.
- Selezionare il nuovo pattern creato (IMPORTANTE!)
- Cancellare gli ultimi due sedicesimi del «Closed HH» e riportarli sul «Open HH».
- Selezionare '32' dalla «Grid Resolution» e aggiungere altri due colpi a fianco dei sedicesimi gia' esistenti.
- Aggiustate l'intensita' in maniera che il primo dei 4 trendaduesimi sia [0.78] mentre gli altri 3 siano [0.20] per simulare un'apertura piu' lunga.

![Fig. 3Dettaglio dell'intro, quarta battuta. ](/img/docs/tutorial/Intro4th.png)

Abbiamo gia' visto come creare il pattern base, dunque per cominciare la stesura della prima strofa basta copiare dal Song Editor il pattern «intro_a» e rinominarlo, per esempio «A-B-C_1», poiche' rappresenta la prima battuta della strofa che poi andra' bene anche per il bridge (B) e il ritornello (C). ** Attenzione**, perche' non aggiungere due crocette consecutive in corrispondenza di questo pattern appena creato? Poiche' nella prima battuta c'e' un colpo di «Crash» che conclude l'intro precedente, il risultato e' che le prime due battute non sono completamente identiche. Per aggiungere la seconda battuta si deve quindi copiare il pattern «A-B-C_1» e rinominarlo «A-B-C_2», togliendo poi il colpo di «Crash» citato prima.

Alla stessa maniera per ottenere le 2 battute seguenti e' sufficiente copiare nel Song Editor il pattern in Fig. 2, rinominarlo secondo la serie e aggiungere due crocette fino al numero '8' (poiche' sono identiche): il risultato ottenuto dovrebbe essere come da Fig. 4.

Le rimanenti 4 battute della strofa sommariamente sono una ripetizione di cio' che abbiamo appena scritto, dunque perche' rifare tutto? La battuta 5,6,7 sono identiche alle precedenti, quindi e' sufficiente aggiungere in sequenza due crocette sul pattern «A-B-C_2» e una sul pattern «A-B-C_3+4» avendo cura di rinominare di conseguenza i nomi dei pattern per capire come la canzone si muove nel Song Editor, mentre nell'ottava battuta c'e' il fill che conclude la strofa quindi dobbiamo creare una nuova riga nel Song Editor, magari copiando il pattern «A-B-C_3+4» e rinominandolo «A-B-C_8», e modificarlo come da Fig. 4. Notate come anche in questo caso i tre colpi di rullante («Snare Jazz») finali siano stati opportunamente accentati rispettivamente con [0.10], [0.20] e [0.78]; nell'immagine non si vede ma anche i due colpi finali di «Tom Mid» hanno un'intensita' di [0.50]. Si tratta solo di un piccolo passaggio, forse e' meglio non picchiare troppo sulle pelli :)

![Fig. 4Ottava battuta della prima strofa. ](/img/docs/tutorial/Verse8th.png)

Il risultato finale nel Song Editor dovrebbe essere simile alla Fig. 5.

![Fig. 5Intro e prima strofa nel Song Editor. ](/img/docs/tutorial/VerseAll.png)

**ATTENZIONE!** Se siete giunti fino qui senza mai salvare potrebbe essere un'ottima idea farlo adesso. Un semplice [CTRL+S] seguito dal nome che volete dare al vostro lavoro in corso vi togliera' ogni preoccupazione. Se volete aggiungere anche qualche informazione supplementare fate click con LMB sul pulsante 'S' del Song Editor e modificate i campi a vostro piacimento, queste sono le informazioni che verranno automaticamente visualizzate all'apertura del brano.

Ora che abbiamo riportato la prima strofa per intero dovreste avere un'idea del meccanismo con cui creare i pattern successivi: il primo bridge e' composto dalle solite 8 battute (4+4) con una piccola variazione alla fine della quarta, quale cosa ci impone di creare una "quarta battuta" differente, mentre per le altre basta aggiungere le nostre crocette amiche per sveltire il lavoro.

Prendiamo dunque come campione proprio l'ultimo pattern creato («A-B-C_8») e rinominiamolo «Bridge1_4» (per indicare che e' la quarta battuta del primo bridge) e lo modifichiamo come da Fig. 6. In poco tempo abbiamo quindi gia' completato la stesura del primo bridge! Il Song Editor adesso dovrebbe apparire simile alla Fig. 7. Osservando attentamente la figura ci si potrebbe domandare come mai la quinta battuta del bridge (corrispondente alla 17esima battuta del Song Editor) non sia stata assegnata al pattern «A-B-C_1»; quel pattern ha infatti un colpo di crash sul primo quarto che non e' presente nel pattern «A-B-C_2+5+6».

![Fig. 6Quarta battuta del primo Bridge. ](/img/docs/tutorial/Bridge1_4th.png)

![Fig. 7Il Song Editor con il primo bridge. ](/img/docs/tutorial/VerseBridge.png)

Procedendo cosi' potremo creare velocemente le successive parti del pezzo: dopo questo bridge c'e' infatti di nuovo una strofa, un altro bridge e il ritornello, sono tutti molto simili quindi basta creare dei pattern differenziati solo per quelle battute che effettivamente differiscono. Insieme a questa guida c'e' comunque il file con il tutto il pezzo. Logicamente si possono creare righe tante quante sono le battute, ma una canzone completa poi rischia di diventare difficile da seguire e il file relativo occupa piu' spazio.

Verso meta' pezzo poi ci sono due riff consecutivi: ciascuno e' lungo 2 battute ma in realta' la sostanza non cambia poi molto. Il pattern musicale per la batteria e' lo stesso, sono solo tutti gli altri strumenti che eseguono qualcosa di simile a quello che verra' poi rappresentato dal riff finale, in cui partecipa anche la batteria.

Piu' semplicemente in questo riff la batteria esegue il solito pattern per una battuta (vedi Fig. 1) mentre nella seconda accenta insieme agli altri strumenti (Fig. 8), poi ripete il solito pattern per una battuta e di nuovo nella seconda ci sono solo due accenti con un piccolo fill a chiusura del tutto (Fig. 9); ancora una volta l'apertura del charleston finale e' simulata con due intensita' differenziate di [0.78] e [0.20].

![Fig. 8Seconda battuta del riff. ](/img/docs/tutorial/Riff1b.png)

![Fig. 9Quarta battuta del riff. ](/img/docs/tutorial/Riff1c.png)

Una volta analizzato il riff abbiamo girato la boa della meta' del pezzo. Cio' che resta da scrivere e' la solita strofa ripetuta due volte consecutive, un bridge e il ritornello ripetuto 3 volte con in coda il solito riff finale.

Questa seconda meta' della canzone differisce lievemente dalla precedente poiche' nelle due strofe ci sono alcune aperture del charleston e ogni 4 battute c'e' quasi sempre un piccolo passaggio, il tutto tradotto nel linguaggio di Hydrogen significa ricreare da capo un'altra sezione «A-B-C-*» perche' a questo punto non conviene piu' sforzarsi di incastrare dei pattern precedentemente creati, ci sono troppe differenze. Copiare quindi i pattern creati in precedenza per la strofa e rinominarli per esempio con un suffisso '_hh' per indicare la presenza dello strumento «Open HH». Come viene accennato nell'introduzione il batterista originale del pezzo aggiunge anche del suo ed e' questo che fa la differenza fra un pezzo suonato e un pezzo riportato su carta (o su Hydrogen): tutto questo per dire che le parti seguenti della canzone sono riportate cercando di essere fedeli al pezzo originale, ma un altro orecchio potra' dare un'altra interpretazione, in fondo stiamo solo cercando di insegnare a usare un programma, non a emulare Jeff Porcaro :)

Comunque ecco in Fig. 10 come appare la sezione del Song Editor relativa alle strofe e al bridge che seguono il riff; come si puo' notare le prime battute (48-50 secondo la numerazione del Song Editor) sono prese dal vecchio pattern mentre le altre (51-71) sono nuove. In piu' sono state create anche due battute 'ad hoc' identificate con «A-B-C-3a_hh» (Fig. 11 per vedere un esempio) e «A-B-C-4a_hh» poiche' hanno alcune singolarita' non presenti in nessun pattern finora scritto.

![Fig. 10Terza e quarta strofa nel Song Editor. ](/img/docs/tutorial/VerseBridge_hh.png)

![Fig. 11Settima battuta del terzo bridge. ](/img/docs/tutorial/Bridge3_3a_hh.png)

In seguito al terzo bridge abbiamo tre volte il ritornello: la prima volta il rullante e' sostituito dallo strumento «Stick» e la cassa non viene suonata (potrebbe sembrare il contrario perche' il basso invece suona, ad ogni buon conto lo strumento c'e' lo stesso smorzando l'intensita' a [0.50]), mentre la seconda e la terza volta ci sono alcune battute fuori dal coro come segnalato dai pattern «C3_*», in Figura 12 il pattern «C3_6+7 & C4_3» (lievemente diverso ma pur sempre tale) che cripticamente identifica la sesta e settima battuta del terzo ritornello e la terza battuta del quarto ritornello: se una notazione del genere puo' confondere e' sufficiente adattarla al proprio sistema.

![Fig. 13Il pattern del riff finale. ](/img/docs/tutorial/C3_6+7.png)

E con questo siamo arrivati alla fine della canzone. L'obiettivo di questo breve tutorial era dare una rapida panoramica sulle funzioni che tipicamente si andranno a utilizzare di Hydrogen nell'uso comune: come accennato nell'introduzione, questo programma puo' comunque essere usato come un semplice click accompagnando la batteria dal solo metronomo oppure ancora si puo' isolare un pezzo particolarmente ostico di un brano, riportarlo nel Pattern Editor di Hydrogen e metterlo in loop: come in molte altre cose ci si accorge che anche la sola analisi di un brano da studiare ne rende piu' facile la comprensione e l'esecuzione e anche in questo Hydrogen puo' aiutare sveltendo il lavoro di una semplice stesura di un pattern e successiva raffinazione.

Per commenti, suggerimenti, correzioni si puo' utilizzare le mailing list attivate per Hydrogen (hydrogen.sf.net)
