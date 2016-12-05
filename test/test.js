var toWylie = require('../src/wylie.js').toWylie;
var assert = require('assert');

describe('wylie simple check', function () {
  it('0F00 - 0F0A', function () {
    var text = 'ༀ༁༂༃༄༅༆༇༈༉༊';
    var correctText = 'oṃȳuṃuɱ༄༅༆༇/༉༊';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
  it('0F0B - 0F1F', function () {
    var text = '་༌།༎༏༐༑༒༓༔༕༖༗༘༜༝༞༟';
    var correctText = '  ///¦￤|༒༓༔༕༖༗༘༜༝༞༟';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
  it('0F20 - 0F29(numbers)', function () {
    var text = '༠༡༢༣༤༥༦༧༨༩';
    var correctText = '0123456789';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
  it('0F2A - 0F3B', function () {
    var text = '༪༫༬༭༮༯༰༱༲༳༴༵༶༷༸༹༺༻';
    var correctText = '༪༫༬༭༮༯༰༱༲༳༴༵༶༷༸༹༺༻';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
  it('0F3C - 0F3F', function () {
    var text = '༼༽༾༿';
    var correctText = '{})(';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
  it('0F40 - 0F58', function () {
    var text = 'ཀཁགངཅཆཇཉཊཋཌཌྷཎཏཐདདྷནཔཕབབྷམ';
    var correctText = 'kakhagangacachajanyaṭaṭhaḍaḍhaṇatathadadhanapaphababham';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
  it('0F59 - 0F6C', function () {
    var text = 'ཙཚཛཛྷཝཞཟའཡརལཤཥསཧཨཀྵཪཫཬ';
    var correctText = "tsatshadzadzhawazhaza'ayaralashaṣasahaakṣaṛaḵṛa";
    text = toWylie(text);
    assert.equal(correctText, text);
  });
  it('0F71 - 0F83 (no test logic yet)', function () {
    var text = '༪༫༬༭༮༯༰༱༲༳༴༵༶༷༸༹༺༻';
    var correctText = '༪༫༬༭༮༯༰༱༲༳༴༵༶༷༸༹༺༻';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
  it('0F84 - 0F8B', function () {
    var text = '྄྅྆྇ྈྉྊྋ';
    var correctText = '྄`྆྇ྈྉྊྋ';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
  it('0F90 - 0FBC (no test logic yet)', function () {
    var text = '༪༫༬༭༮༯༰༱༲༳༴༵༶༷༸༹༺༻';
    var correctText = '༪༫༬༭༮༯༰༱༲༳༴༵༶༷༸༹༺༻';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
  it('0FBE - 0FCC', function () {
    var text = '྾྿࿀࿁࿂࿃࿄࿅࿇࿈࿉࿊࿋࿌';
    var correctText = '྾྿࿀࿁࿂࿃࿄࿅࿇࿈࿉࿊࿋࿌';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
  it('0FCE - 0FD8', function () {
    var text = '࿎࿏࿐࿑࿒࿓࿔࿕࿖࿗࿘';
    var correctText = '࿎࿏࿐࿑࿒࿓࿔࿕࿖࿗࿘';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
});

describe('wylie special check', function () {
  it('0F73 & 0F75', function () {
    var text = 'ཤྲཱི གཱི ནཱི རཱི ཧཱུྃ རཱུ';
    var correctText = 'shrī gī nī rī hūṁ rū';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
});

describe('wylie sentences check', function () {
  it('sentences 1', function () {
    var text = 'ཨ་བྷི་དྷ་ན་ཨུཏྟ་ར་ཏནྟྲ་ནཱ་མ།';
    var correctText = 'a bhi dha na utta ra tantra nā ma/';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
  it('sentences 2', function () {
    var text = 'མཉྫུ་ཤྲཱི་ཛྙཱ་ན་སཏྭ་སྱ་པ་ར་མཱཪྠ་ནཱ་མ་སྃ་གཱི་ཏི།';
    var correctText = 'manydzu shrī dznyā na satwa sya pa ra māṛtha nā ma saṁ gī ti/';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
  it('sentences 3', function () {
    var text = 'ཤྲཱི་བཛྲ་ཌཱ་ཀཱ་ནཱ་མ་མ་ཧཱ་ཏནྟྲ་རཱ་ཛཱ།';
    var correctText = 'shrī badzra ḍā kā nā ma ma hā tantra rā dzā/';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
  it('sentences 4', function () {
    var text = 'ཏན་ཏྲ་རཱ་ཛ་ཤྲཱི་ལ་གྷུ་སམ་བ་ར་ནཱ་མ';
    var correctText = 'tan tra rā dza shrī la ghu sam ba ra nā ma';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
  it('sentences 5', function () {
    var text = 'ཤྲཱི་གུ་ཧྱ་བཛྲ་ཏནྟྲ་རཱ་ཛ།';
    var correctText = 'shrī gu hya badzra tantra rā dza/';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
  it('sentences 6', function () {
    var text = '༄༅༅། །རྒྱ་གར་སྐད་དུ། ཨཱརྱ་མ་ཧཱ་རཏྣ་ཀཱུ་ཊ་དྷརྨ་པརྱཱ་ཡ་ཤ་ཏ་སཱ་ཧ་སྲི་ཀ་གྲན་ཏེ་ཏྲི་སམྦ་ར་ནིར་དེ་ཤ་པ་རི་བརྟ་ན་ནཱ་མ་མ་ཧཱ་ཡཱ་ན་སཱུ་ཏྲ།';
    var correctText = '༄༅༅/ /rgya gar skad du/ ārya ma hā ratna kū ṭa dharma paryā ya sha ta sā ha sri ka gran te tri samba ra nir de sha pa ri brta na nā ma ma hā yā na sū tra/';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
  it('sentences 7', function () {
    var text = 'ཨཱརྱ་ཨ་ནན་ཏ་མུ་ཁ་པ་རི་ཤོ་དྷ་ན་ནིར་དེ་ཤ་པ་རི་བརྟ་ནཱ་མ་མ་ཧཱ་ཡཱ་ན་སཱུ་ཏྲ';
    var correctText = 'ārya a nan ta mu kha pa ri sho dha na nir de sha pa ri brta nā ma ma hā yā na sū tra';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
  it('sentences 8', function () {
    var text = 'ཨོྃ་ཨཱཿ ན་མཿ ཀུ་མཱ་ར་ཏཱ་ཡ་ཧཱུྃ།';
    var correctText = 'oṁ āḥ na maḥ ku mā ra tā ya hūṁ/';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
  it('sentences 9', function () {
    var text = 'སརྦྦ་སིདྡྷྃ་མེ་པྲ་ཡ་ཙྪནྟུ';
    var correctText = 'sarbba siddhaṁ me pra ya tstshantu';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
  it('sentences 10', function () {
    var text = 'སྃ་གྷ་ས་པ་རི་ཝ་ར་སྱ་ད་ཤ་དྷརྨྨ་ཙརྱ་སཱ་དྷ་ན་ཝརྟ་ནྃ་ཀུརྦནྟུ།';
    var correctText = 'saṁ gha sa pa ri wa ra sya da sha dharmma tsarya sā dha na warta naṁ kurbantu/';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
  it('sentences 11', function () {
    var text = 'ཏདྱ་ཐཱ་བྷོ་བྷོ་དཱ་ན་ནཱ་གཱ་ཨ་དྷི་པ་ཏ་ཡེ།';
    var correctText = 'tadya thā bho bho dā na nā gā a dhi pa ta ye/';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
  it('sentences 12', function () {
    var text = 'ཨི་དྃ་ནཱི་ལྃ་བ་ར་དྷ་ར་ཤ་རཱི་རྃ་བཛྲ་པཱ་ཎི་ཧྲི་ད་ཡྃ།';
    var correctText = 'i daṁ nī laṁ ba ra dha ra sha rī raṁ badzra pā ṇi hri da yaṁ/';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
  it('sentences 13', function () {
    var text = 'ཀྲྀ་ཏནྟཱ་རཱུ་པཱ་ཡ་ཕཊ། རོ་ཥ་ཎཱ་ཡ་ཕཊ།';
    var correctText = 'krî tantā rū pā ya phaṭ/ ro ṣa ṇā ya phaṭ/';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
  it('sentences 14', function () {
    var text = 'ཀུྃ་བྷ་ཎ་ཌོང་སཱ་ད་ནཱ་ཡ་ཕཊ། པྲེ་ཏ་པི་ཤཱ་ཙ་བི་ནཱ་ཤ་ཀ་རཱ་ཡ་ཕཊ། ';
    var correctText = 'kuṁ bha ṇa ḍong sā da nā ya phaṭ/ pre ta pi shā tsa bi nā sha ka rā ya phaṭ/ ';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
  it('sentences 15', function () {
    var text = 'ན་མོ་བུད་དྷ་སྱ། ན་མོ་དྷརྨ་སྱ། ན་མཿསྃ་གྷ་སྱ།';
    var correctText = 'na mo bud dha sya/ na mo dharma sya/ na maḥsaṁ gha sya/';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
  it('sentences 16', function () {
    var text = 'བཛྲ་བི་དཱ་རཱ་ཡ་སྭཱ་ཧཱ། ཙྪིན་ད་ཙྪིན་ད། བྷིན་ད་བྷིན་ད།';
    var correctText = 'badzra bi dā rā ya swā hā/ tstshin da tstshin da/ bhin da bhin da/';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
  it('sentences 17', function () {
    var text = 'ཀྐ་ཀྑ་ཀྒ་ཀྒྷ་ཀྔ།';
    var correctText = 'kka kkha kga kgha knga/';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
  it('sentences 18', function () {
    var text = 'ཨ་བྷི་དྷ་ན་ཨུཏྟ་ར་ཏནྟྲ་ནཱ་མ།';
    var correctText = 'a bhi dha na utta ra tantra nā ma/';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
  it('sentences 19', function () {
    var text = 'ཀྚ་ཀྛ་ཀྜ་ཀྜྷ་ཀྞ།';
    var correctText = 'kṭa kṭha kḍa kḍha kṇa/';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
  it('sentences 20', function () {
    var text = 'ཀྤ་ཀྥ་ཀྦ་ཀྦྷ་ཀྨ།';
    var correctText = 'kpa kpha kba kbha kma/';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
  it('sentences 21', function () {
    var text = 'ཀྟ་ཀྠ་ཀྤ་ཀྦྷ་ཀྣ།';
    var correctText = 'kta ktha kpa kbha kna/';
    text = toWylie(text);
    assert.equal(correctText, text);
  });
  it('sentences 22', function () {
    var text = 'ཀྨ་ཀྐྤ་ཀྵ་ཀྴ་ཀྠྐ་ཞེས་པའོ།';
    var correctText = "kma kkpa kṣa ksha kthka zhes pa'o/";
    text = toWylie(text);
    assert.equal(correctText, text);
  });
});