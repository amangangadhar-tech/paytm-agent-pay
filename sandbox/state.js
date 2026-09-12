// In-memory sandbox state. seed() resets everything; POST /api/reset calls it.

export const state = {};

const daysAgo = (n) => new Date(Date.now() - n * 86400000).toISOString();

export function seed() {
  state.seededAt = new Date().toISOString();

  state.users = {
    aman: { userId: 'aman', name: 'Aman', balance: 4250, dailyLimit: 10000, dailySpent: 0, vpa: 'aman@paytm' },
  };

  state.merchants = {
    quickcab: {
      id: 'quickcab', name: 'QuickCab', vpa: 'quickcab@paytm',
      tags: ['cab', 'ride', 'taxi', 'merchant'],
      skills: ['get_quote', 'confirm_order'],
      kind: 'cab', baseFare: 120, perKm: 15,
    },
    medplus: {
      id: 'medplus', name: 'MedPlus Pharmacy', vpa: 'medplus@paytm',
      tags: ['pharmacy', 'medicine', 'health', 'merchant'],
      skills: ['get_quote', 'confirm_order'],
      kind: 'pharmacy',
      catalog: { paracetamol: 30, crocin: 35, dolo: 32, cetirizine: 25, ors: 20, bandage: 45, vitamin: 150, thermometer: 250 },
    },
    nammametro: {
      id: 'nammametro', name: 'Namma Metro', vpa: 'nammametro@paytm',
      tags: ['metro', 'train', 'transit', 'ticket', 'merchant'],
      skills: ['get_quote', 'confirm_order'],
      kind: 'metro',
      // station -> zone index along the line; fare = 10 + 10 * |zone diff| (capped 60)
      // Purple line runs west(-) <-> east(+) through Majestic(0); Green runs south(-) <-> north(+) through Majestic(0).
      // Fare hops: same line -> |a-b|; different lines -> |a|+|b| (change at Majestic).
      stations: {
        majestic: ['purple', 0], kempegowda: ['purple', 0], 'city railway': ['purple', -1], magadi: ['purple', -2], vijayanagara: ['purple', -3], 'mysore road': ['purple', -5], kengeri: ['purple', -8], challaghatta: ['purple', -9],
        'sir m visvesvaraya': ['purple', 1], 'vidhana soudha': ['purple', 2], 'cubbon park': ['purple', 3], 'mg road': ['purple', 4], trinity: ['purple', 5], halasuru: ['purple', 6], indiranagar: ['purple', 7], 'swami vivekananda': ['purple', 8], baiyappanahalli: ['purple', 9], 'kr puram': ['purple', 11], hoodi: ['purple', 13], whitefield: ['purple', 16],
        chickpete: ['green', -1], 'kr market': ['green', -2], 'national college': ['green', -3], lalbagh: ['green', -4], 'south end': ['green', -5], jayanagar: ['green', -6], 'rv road': ['green', -7], banashankari: ['green', -8], 'jp nagar': ['green', -9], yelachenahalli: ['green', -10], 'silk institute': ['green', -14],
        mantri: ['green', 1], 'sampige road': ['green', 2], srirampura: ['green', 3], 'kuvempu road': ['green', 4], rajajinagar: ['green', 5], 'mahalakshmi': ['green', 6], yeshwanthpur: ['green', 8], peenya: ['green', 11], nagasandra: ['green', 14],
      },
    },
    jio: {
      id: 'jio', name: 'Jio Recharge', vpa: 'jio.recharge@paytm',
      tags: ['recharge', 'mobile', 'prepaid', 'jio', 'merchant'],
      skills: ['get_quote', 'confirm_order'],
      kind: 'recharge', operator: 'Jio',
      plans: { 149: '1GB/day, 20 days', 239: '1.5GB/day, 28 days', 299: '2GB/day, 28 days', 349: '2.5GB/day, 28 days', 719: '2GB/day, 84 days' },
    },
    airtel: {
      id: 'airtel', name: 'Airtel Recharge', vpa: 'airtel.recharge@paytm',
      tags: ['recharge', 'mobile', 'prepaid', 'airtel', 'merchant'],
      skills: ['get_quote', 'confirm_order'],
      kind: 'recharge', operator: 'Airtel',
      plans: { 155: '1GB, 24 days', 299: '1.5GB/day, 28 days', 359: '2GB/day, 28 days', 839: '2GB/day, 84 days' },
    },
    chaipoint: {
      id: 'chaipoint', name: 'Chai Point', vpa: 'chaipoint@paytm',
      tags: ['food', 'tea', 'snacks', 'merchant'],
      skills: ['get_quote', 'confirm_order'],
      kind: 'food',
      catalog: { chai: 20, coffee: 40, samosa: 25, sandwich: 80 },
    },
  };

  // Known payees. Anything not here gets a synthesized medium-risk profile.
  state.payees = {
    'quickcab@paytm':  { score: 6,  verified: true,  firstSeen: daysAgo(900), complaintCount: 0,  txnCount: 12400, reasons: ['Verified Paytm merchant', '12,400 successful transactions', 'Registered 2+ years'] },
    'medplus@paytm':   { score: 5,  verified: true,  firstSeen: daysAgo(1100), complaintCount: 1, txnCount: 31000, reasons: ['Verified Paytm merchant', '31,000 successful transactions', 'Licensed pharmacy'] },
    'nammametro@paytm': { score: 4,  verified: true,  firstSeen: daysAgo(1500), complaintCount: 0, txnCount: 2100000, reasons: ['Verified government transit biller (BMRCL)', '2.1M successful ticket transactions'] },
    'rahul.sharma@okicici': { score: 12, verified: false, firstSeen: daysAgo(800), complaintCount: 0, txnCount: 640, reasons: ['In your contacts (Rahul Sharma)', 'You have paid this ID 14 times before', 'Registered 2+ years, 0 complaints'] },
    'jio.recharge@paytm':    { score: 3, verified: true, firstSeen: daysAgo(2000), complaintCount: 0, txnCount: 5400000, reasons: ['Verified operator biller (Reliance Jio)', '5.4M successful recharges'] },
    'airtel.recharge@paytm': { score: 3, verified: true, firstSeen: daysAgo(2000), complaintCount: 0, txnCount: 4900000, reasons: ['Verified operator biller (Bharti Airtel)', '4.9M successful recharges'] },
    'chaipoint@paytm': { score: 9,  verified: true,  firstSeen: daysAgo(600), complaintCount: 2,  txnCount: 8800,  reasons: ['Verified Paytm merchant', '8,800 successful transactions'] },
    'bescom-update@ybl':   { score: 96, verified: false, firstSeen: daysAgo(3), complaintCount: 47, txnCount: 61, reasons: ['47 fraud complaints in 3 days', 'Impersonates BESCOM (electricity board)', 'Account created 3 days ago', 'Not a registered utility biller'] },
    'refund-helpdesk@ybl': { score: 92, verified: false, firstSeen: daysAgo(5), complaintCount: 33, txnCount: 40, reasons: ['33 fraud complaints', '"Refund" scam pattern — asks victim to pay to receive money', 'Account created 5 days ago'] },
    'kyc-verify@okaxis':   { score: 90, verified: false, firstSeen: daysAgo(9), complaintCount: 28, txnCount: 52, reasons: ['28 fraud complaints', 'Impersonates KYC/bank verification', 'No business registration'] },
    'lucky-draw@ibl':      { score: 88, verified: false, firstSeen: daysAgo(12), complaintCount: 21, txnCount: 35, reasons: ['21 fraud complaints', 'Lottery / lucky-draw scam pattern', 'Collects "processing fee" then disappears'] },
  };

  state.scamPatterns = [
    { id: 'utility_disconnection', name: 'Utility disconnection threat',
      keywords: ['electricity', 'disconnect', 'disconnected', 'bescom', 'power cut', 'bill pending', 'gas connection'],
      advisory: 'Electricity boards never threaten same-day disconnection over SMS/WhatsApp or ask you to pay a stranger\'s UPI ID. Pay bills only inside the Paytm Electricity section.' },
    { id: 'small_amount_kyc', name: '₹1 / small payment for KYC or refund',
      keywords: ['₹1', 'rs 1', 'rs.1', '1 rupee', 'kyc', 'update kyc', 'kyc expired', 'kyc pending', 'unlock refund', 'to receive refund', 'verification fee'],
      advisory: 'You never have to PAY to RECEIVE money. Any "pay ₹1 to verify/unlock" request is a scam — the "collect request" drains your account.' },
    { id: 'lottery', name: 'Lottery / lucky draw / prize',
      keywords: ['lottery', 'lucky draw', 'you have won', 'prize', 'winner', 'jackpot', 'processing fee'],
      advisory: 'You cannot win a lottery you never entered. Prize scams collect a "processing fee" and vanish.' },
    { id: 'otp_share', name: 'OTP / PIN sharing',
      keywords: ['share otp', 'send otp', 'tell me the otp', 'upi pin', 'share pin', 'enter pin to receive'],
      advisory: 'Never share OTP or UPI PIN with anyone. Entering your PIN always SENDS money, never receives it.' },
    { id: 'fake_customer_care', name: 'Fake customer care',
      keywords: ['customer care', 'helpline', 'call this number', 'support executive', 'anydesk', 'teamviewer', 'screen share'],
      advisory: 'Paytm support never asks for remote access, PIN, or payments. Use only the in-app Help section.' },
    { id: 'job_fee', name: 'Job / task fee',
      keywords: ['registration fee', 'job offer', 'part time', 'work from home', 'task earning', 'like videos', 'telegram task'],
      advisory: 'Genuine employers never ask for fees. "Task earning" schemes pay small amounts first, then take large deposits.' },
  ];

  state.contacts = [
    { name: 'Rahul Sharma', aliases: ['rahul', 'rahul sharma'], vpa: 'rahul.sharma@okicici', phone: '98450 11223', paidBefore: 14 },
    { name: 'Arjun Reddy', aliases: ['arjun', 'arjun reddy'], vpa: 'arjun.reddy@ybl', phone: '99000 55667', paidBefore: 0 },
    { name: 'Priya Nair', aliases: ['priya', 'priya nair'], vpa: 'priya.nair@paytm', phone: '98860 77889', paidBefore: 3 },
  ];

  state.ledger = [
    { txnId: 'T1009', userId: 'aman', type: 'DEBIT',  amount: 149, payeeVpa: 'netflix@icici',  note: 'Netflix',          ts: daysAgo(2), status: 'SUCCESS' },
    { txnId: 'T1008', userId: 'aman', type: 'CREDIT', amount: 2000, payeeVpa: 'aman@paytm',   note: 'Added money',      ts: daysAgo(3), status: 'SUCCESS' },
    { txnId: 'T1007', userId: 'aman', type: 'DEBIT',  amount: 320, payeeVpa: 'swiggy@axis',   note: 'Swiggy order',     ts: daysAgo(4), status: 'SUCCESS' },
  ];
  state.reports = [];
  state.tokens = {};       // approvalToken -> { userId, payeeVpa, amount, expiresAt, used }
  state.quotes = {};       // quoteId -> quote
  state.orders = [];
  state.agentLog = [];
  state.lastRisk = null;
  state.counters = { txn: 1010, report: 1, order: 1 };
}

seed();
