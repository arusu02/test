export type ScriptLine = {
  character?: string;
  original: string;
  translation: string;
  stageDirection?: boolean;
};

export const SCRIPT_DATA: ScriptLine[] = [
  {
    character: "COMMENDATORE",
    original: "Don Giovanni, a cenar teco\nm'invitasti, e son venuto.",
    translation: "Don Giovanni, mi avevi invitato a cena, ed eccomi: sono venuto."
  },
  {
    character: "GIOVANNI",
    original: "Non l'avrei giammai creduto:\nma farò quel che potrò.\nLeporello, un'altra cena\nfa che subito si porti.",
    translation: "Non l'avrei mai creduto, ma farò il possibile.\nLeporello, prepara subito un'altra cena."
  },
  {
    character: "LEPORELLO",
    original: "(facendo capolino di sotto alla tavola)\nAh! padron… Siam tutti morti…",
    translation: "(Spaventato, da sotto la tavola) Ah, padrone… siamo tutti morti!"
  },
  {
    character: "GIOVANNI",
    original: "(tirandolo fuori)\nVanne dico!",
    translation: "(Violentemente) Esci, dico!"
  },
  {
    character: "COMMENDATORE",
    original: "(a Leporello, che è in atto di partire)\nFerma un po'!\nNon si pasce di cibo mortale\nchi si pasce di cibo celeste;\naltra cure più gravi di queste,\naltra brama quaggiù mi guidò!",
    translation: "(A Leporello, che sta per andare via) Fermati un attimo!\nChi si nutre di cibo celeste non si nutre di quello terreno.\nNon sono venuto per mangiare, ma per una questione ben più importante.\nUn altro desiderio mi ha condotto qui."
  },
  {
    character: "LEPORELLO",
    original: "(La terzana d'avere mi sembra…\nE le membra – fermar più non so.)",
    translation: "Mi sembra di avere la febbre… non riesco nemmeno a muovermi!"
  },
  {
    character: "GIOVANNI",
    original: "Parla dunque: che chiedi! che vuoi?",
    translation: "Parla dunque, che vuoi?"
  },
  {
    character: "COMMENDATORE",
    original: "Parlo, ascolta: più tempo non ho.",
    translation: "Ascolta: non ho molto tempo."
  },
  {
    character: "GIOVANNI",
    original: "Parla, parla, ascoltando ti sto.",
    translation: "Parla pure, ti ascolto."
  },
  {
    character: "COMMENDATORE",
    original: "Tu m'invitasti a cena:\nIl tuo dover or sai.\nRispondimi: verrai\ntu a cenar meco?",
    translation: "Tu mi hai invitato a cena. Ora sai qual è il tuo dovere.\nRispondimi: verrai tu a cenare con me?"
  },
  {
    character: "LEPORELLO",
    original: "(da lontano, sempre tremando)\nOibò!\ntempo non ha… scusate.",
    translation: "(Agitato) Oh no! Dite che non potete, dite che non c'è tempo!"
  },
  {
    character: "GIOVANNI",
    original: "A torto di viltate\nTacciato mai sarò.",
    translation: "Non sarò mai accusato di codardia."
  },
  {
    character: "COMMENDATORE",
    original: "Risolvi!",
    translation: "Deciditi!"
  },
  {
    character: "GIOVANNI",
    original: "Ho già risolto!",
    translation: "Ho già deciso!"
  },
  {
    character: "COMMENDATORE",
    original: "Verrai?",
    translation: "Verrai?"
  },
  {
    character: "LEPORELLO",
    original: "(a Don Giovanni)\nDite di no.",
    translation: "(Piano a Don Giovanni) Dite di no!"
  },
  {
    character: "GIOVANNI",
    original: "Ho fermo il cuore in petto:\nnon ho timor: verrò!",
    translation: "Ho il cuore saldo, non ho timore: verrò."
  },
  {
    character: "COMMENDATORE",
    original: "Dammi la mano in pegno.",
    translation: "Dammi la mano in segno di promessa."
  },
  {
    character: "GIOVANNI",
    original: "(porgendogli la mano)\nEccola… Ohimé!…",
    translation: "(Porgendo la mano) Eccola… ohimè!"
  },
  {
    character: "COMMENDATORE",
    original: "Cos'hai?",
    translation: "Cos'hai?"
  },
  {
    character: "GIOVANNI",
    original: "Che gelo è questo mai!",
    translation: "Che gelo è questo?!"
  },
  {
    character: "COMMENDATORE",
    original: "Pentiti, cangia vita:\nè l'ultimo momento!",
    translation: "Pentiti, cambia vita: è il tuo ultimo momento."
  },
  {
    character: "GIOVANNI",
    original: "(vuol scoigliersi, ma invano)\nNo, no, ch'io non mi pento;\nvanne lontan da me!",
    translation: "(Cerca invano di liberarsi) No, no, non mi pento!\nVattene via da me!"
  },
  {
    character: "COMMENDATORE",
    original: "Pentiti, o scellerato!",
    translation: "Pentiti, scellerato!"
  },
  {
    character: "GIOVANNI",
    original: "No, vecchio infatuato!",
    translation: "No, vecchio illuso!"
  },
  {
    character: "COMMENDATORE",
    original: "Pentiti!",
    translation: "Pentiti!"
  },
  {
    character: "GIOVANNI",
    original: "No.",
    translation: "No!"
  },
  {
    character: "COMMENDATORE",
    original: "Sì.",
    translation: "Sì!"
  },
  {
    character: "GIOVANNI",
    original: "No.",
    translation: "No!"
  },
  {
    character: "COMMENDATORE",
    original: "Ah! tempo più non v'è.\n(Fuoco da diverse parti, il Commendatore sparisce,\ne s'apre una voragine.)",
    translation: "Non c'è più tempo!\n(Si scatena il fuoco, il Commendatore sparisce, e si apre una voragine.)"
  },
  {
    character: "GIOVANNI",
    original: "Da qual tremore insolito…\nSento… assalir… gli spiriti…\nDond'escono quei vortici\nDi foco pien d'orror!…",
    translation: "Che tremore strano mi assale…\nSento gli spiriti attorno…\nDa dove vengono quei vortici di fuoco e orrore?!"
  },
  {
    character: "CORO",
    original: "(di sotterra, con voci cupe)\nTutto a tue colpe è poco:\nvieni; c'è un mal peggior.",
    translation: "Le tue colpe non bastano: vieni, ti aspetta un male peggiore!"
  },
  {
    character: "GIOVANNI",
    original: "Chi l'anima mi lacera!…\nChi m'agita le viscere!…\nChe strazio! ohimé! che smania!\nChe inferno!… che terror…",
    translation: "Chi mi lacera l'anima?! Chi mi agita le viscere?!\nChe tormento! Che orrore! Che inferno! Che terrore!"
  },
  {
    character: "LEPORELLO",
    original: "(Che ceffo disperato!…\nChe gesti d'un dannato!…\nChe gridi! che lamenti!…\nCome mi fa terror!)",
    translation: "Che volto disperato! Che gesti da dannato!\nChe grida, che lamenti! Mi fa paura!"
  },
  {
    character: "CORO",
    original: "Tutto a tue colpe è poco:\nvieni; c'è un mal peggior.\n(Cresce il fuoco, compariscono diverse furie, s'impossessano di Don Giovanni e seco lui sprofondano.)",
    translation: "Le tue colpe non bastano: vieni, ti aspetta un male peggiore!\n(Il fuoco cresce, compaiono demoni che afferrano Don Giovanni e lo trascinano all'inferno.)"
  },
  {
    character: "SCENA ULTIMA",
    original: "Leporello, Donna Elvira, Donn'Anna, Zerlina, Don Ottavio, Masetto, con ministri di giustizia.",
    translation: "Entrano: Leporello, Donna Elvira, Donna Anna, Don Ottavio, Zerlina, Masetto e alcuni ufficiali.",
    stageDirection: true
  },
  {
    character: "TUTTI",
    original: "(meno Leoprello)\nAh, dov'è il perfido?\nDov'è l'indegno?\nTutto il mio sdegno\nsfogar io vo'.",
    translation: "Dov'è il traditore? Dov'è il malvagio?\nVoglio sfogare la mia rabbia!"
  },
  {
    character: "ANNA",
    original: "Solo mirandolo\nstretto in catene\nalle mie pene\ncalma darò.",
    translation: "Solo vedendolo in catene troverò conforto al mio dolore."
  },
  {
    character: "LEPORELLO",
    original: "Più non sperate\ndi ritrovarlo…\nPiù non cercate…\nLontano andò.",
    translation: "Non sperate più di trovarlo… non cercatelo più: è andato lontano!"
  },
  {
    character: "TUTTI",
    original: "Cos'è? Favella – Via, presto, sbrigati!",
    translation: "Che dici?! Parla, presto!"
  },
  {
    character: "LEPORELLO",
    original: "Venne un colosso… – ma se non posso…\nTra fumo e fuoco – badate un poco…\nL'uomo di sasso… – fermate il passo…\nGiusto là sotto… – diede il gran botto…\nGiusto là il diavolo - sel trangugiò.",
    translation: "È arrivato un gigante… tra fumo e fuoco…\nL'uomo di pietra! Lì sotto, proprio lì!\nHa fatto un grande botto… e il diavolo se l'è portato via!"
  },
  {
    character: "TUTTI",
    original: "Stelle! che sento!",
    translation: "Oh cielo, che sento?!"
  },
  {
    character: "LEPORELLO",
    original: "Vero è l'evento!",
    translation: "È tutto vero!"
  },
  {
    character: "TUTTI",
    original: "Ah, certo è l'ombra – che l'/m'incontrò.",
    translation: "Sicuramente era lo spettro che incontrò tempo fa!"
  },
  {
    character: "OTTAVIO",
    original: "Or che tutti, o mio tesoro,\nvendicati siam dal cielo,\nporgi, porgi a me un ristoro,\nnon mi far languire ancor.",
    translation: "Ora che il cielo ci ha vendicati, amore mio,\nconsolati e dammi finalmente la gioia del tuo amore!"
  },
  {
    character: "ANNA",
    original: "Lascia, o caro, un anno ancora\nallo sfogo del mio cor.",
    translation: "Lasciami, caro, ancora un anno per calmare il mio cuore."
  },
  {
    character: "OTTAVIO",
    original: "Al desio di chi t'/m'adora\nCeder deve un fido amor.",
    translation: "Il vero amore sa aspettare, ma alla fine trionfa."
  },
  {
    character: "ELVIRA",
    original: "Io men vado in un ritiro\na finir la vita mia!",
    translation: "Io andrò in convento a finire la mia vita."
  },
  {
    character: "ZERLINA E MASETTO",
    original: "Noi, Masetto/Zerlina, a casa andiamo!\na cenar in compagnia!",
    translation: "E noi torneremo a casa a cenare insieme, felici!"
  },
  {
    character: "LEPORELLO",
    original: "Ed io vado all'osteria\na trovar padron miglior.",
    translation: "E io vado all'osteria, a cercare un padrone migliore!"
  },
  {
    character: "ZERLINA, MASETTO E LEPORELLO",
    original: "Resti dunque quel birbon\ncon Proserpina e Pluton;\ne noi tutti, o buona gente,\nripetiam allegramente\nl'antichissima canzon:",
    translation: "Che Don Giovanni resti con Proserpina e Plutone (nell'inferno).\nE noi, brava gente, cantiamo tutti insieme l'antica canzone:"
  },
  {
    character: "TUTTI",
    original: "Questo è il fin di chi fa mal;\nE de' perfidi la morte\nalla vita è sempre ugual.\nFINE DELL'OPERA",
    translation: "Questo è il destino di chi fa il male:\nla morte dei malvagi è sempre degna della loro vita.\nFINE DELL'OPERA"
  }
];
