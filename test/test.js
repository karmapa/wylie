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
    var correctText = "tsatshadzadzhawazhaza'ayaralashaṣasahaakṣarḵṛa";
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