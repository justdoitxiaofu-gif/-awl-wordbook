// AWL 单词本 · Service Worker（离线缓存）
const CACHE = 'awl-v2';
const CORE = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'];
const AUDIO = ["audio/Constitution.mp3","audio/Gold Rush.mp3","audio/Renaissance.mp3","audio/a mad rush of.mp3","audio/achieve.mp3","audio/acknowledged.mp3","audio/acquisition.mp3","audio/administration.mp3","audio/affect.mp3","audio/afford.mp3","audio/alternative.mp3","audio/analysis.mp3","audio/approach.mp3","audio/appropriate.mp3","audio/area.mp3","audio/aspects.mp3","audio/assessment.mp3","audio/assistance.mp3","audio/assume.mp3","audio/authoritative.mp3","audio/authority.mp3","audio/available.mp3","audio/benefit.mp3","audio/beyond.mp3","audio/bird's-eye view.mp3","audio/boundary.mp3","audio/bronze.mp3","audio/burn down.mp3","audio/burst into bloom.mp3","audio/capture.mp3","audio/categories.mp3","audio/census.mp3","audio/chapter.mp3","audio/chemistry.mp3","audio/circumstance.mp3","audio/collision.mp3","audio/comment.mp3","audio/commercial.mp3","audio/commission.mp3","audio/community.mp3","audio/comparison.mp3","audio/compensate.mp3","audio/complex.mp3","audio/component.mp3","audio/computer.mp3","audio/concept.mp3","audio/conclusion.mp3","audio/conduct.mp3","audio/consent.mp3","audio/consequences.mp3","audio/considerable.mp3","audio/consist.mp3","audio/constant.mp3","audio/constitutional.mp3","audio/constrain.mp3","audio/construction.mp3","audio/consumer.mp3","audio/context.mp3","audio/contract.mp3","audio/contribute.mp3","audio/convene.mp3","audio/coordinate.mp3","audio/core.mp3","audio/corporate.mp3","audio/correspond.mp3","audio/cradle.mp3","audio/crash.mp3","audio/create.mp3","audio/credit.mp3","audio/criteria.mp3","audio/cultural.mp3","audio/data.mp3","audio/deceive.mp3","audio/decrease.mp3","audio/deduce.mp3","audio/definition.mp3","audio/demarcation.mp3","audio/democratic.mp3","audio/demonstrate.mp3","audio/derive.mp3","audio/descendant.mp3","audio/design.mp3","audio/distinction.mp3","audio/distinctive.mp3","audio/distribution.mp3","audio/document.mp3","audio/dominate.mp3","audio/dump.mp3","audio/dynamic.mp3","audio/economic.mp3","audio/elaborate.mp3","audio/elementary.mp3","audio/elements.mp3","audio/emphasis.mp3","audio/enslave.mp3","audio/ensure.mp3","audio/environment.mp3","audio/equation.mp3","audio/establish.mp3","audio/estimate.mp3","audio/ethnic.mp3","audio/evacuate.mp3","audio/evaluation.mp3","audio/evidence.mp3","audio/excerpt.mp3","audio/exclude.mp3","audio/export.mp3","audio/factors.mp3","audio/features.mp3","audio/federal.mp3","audio/final.mp3","audio/financial.mp3","audio/first-rate.mp3","audio/focus.mp3","audio/forefather.mp3","audio/foreman.mp3","audio/foremost.mp3","audio/formula.mp3","audio/framework.mp3","audio/function.mp3","audio/fund.mp3","audio/fur.mp3","audio/grant.mp3","audio/harbor.mp3","audio/headquarters.mp3","audio/identify.mp3","audio/illustrate.mp3","audio/immigrate.mp3","audio/impact.mp3","audio/imply.mp3","audio/in memory of.mp3","audio/income.mp3","audio/indicate.mp3","audio/individual.mp3","audio/inhabitant.mp3","audio/initial.mp3","audio/injury.mp3","audio/instance.mp3","audio/institute.mp3","audio/insurance.mp3","audio/intellectual.mp3","audio/interact.mp3","audio/interpretation.mp3","audio/investment.mp3","audio/involve.mp3","audio/issue.mp3","audio/items.mp3","audio/journal.mp3","audio/justify.mp3","audio/labour.mp3","audio/labyrinth.mp3","audio/layer.mp3","audio/legal.mp3","audio/legislation.mp3","audio/liberty.mp3","audio/link.mp3","audio/locate.mp3","audio/maintenance.mp3","audio/major.mp3","audio/maximise.mp3","audio/method.mp3","audio/metropolis.mp3","audio/minor.mp3","audio/minority.mp3","audio/mosquito.mp3","audio/munition.mp3","audio/navigator.mp3","audio/negate.mp3","audio/neon.mp3","audio/normal.mp3","audio/oath.mp3","audio/obtained.mp3","audio/occur.mp3","audio/oppression.mp3","audio/origin.mp3","audio/outcome.mp3","audio/outcomer.mp3","audio/painfully.mp3","audio/participation.mp3","audio/partner.mp3","audio/perceived.mp3","audio/percent.mp3","audio/period.mp3","audio/permanent.mp3","audio/philosophy.mp3","audio/physical.mp3","audio/poet.mp3","audio/policy.mp3","audio/positive.mp3","audio/potential.mp3","audio/prejudice.mp3","audio/previous.mp3","audio/primary.mp3","audio/principle.mp3","audio/procedure.mp3","audio/process.mp3","audio/proportion.mp3","audio/prosperous.mp3","audio/publish.mp3","audio/purchase.mp3","audio/range.mp3","audio/react.mp3","audio/region.mp3","audio/register.mp3","audio/regulations.mp3","audio/relevant.mp3","audio/rely.mp3","audio/remove.mp3","audio/represent.mp3","audio/required.mp3","audio/research.mp3","audio/residence.mp3","audio/resident.mp3","audio/resources.mp3","audio/respond.mp3","audio/restore.mp3","audio/restricted.mp3","audio/revel.mp3","audio/revolution of independence.mp3","audio/revolution.mp3","audio/ridicule.mp3","audio/role.mp3","audio/ruin.mp3","audio/satellite.mp3","audio/scheme.mp3","audio/seaport.mp3","audio/section.mp3","audio/sector.mp3","audio/security.mp3","audio/select.mp3","audio/sequence.mp3","audio/set back.mp3","audio/set out.mp3","audio/sex.mp3","audio/shift.mp3","audio/significant.mp3","audio/similar.mp3","audio/sink.mp3","audio/site.mp3","audio/slum.mp3","audio/sophisticated.mp3","audio/sought.mp3","audio/source.mp3","audio/specific.mp3","audio/specify.mp3","audio/split.mp3","audio/stand up.mp3","audio/statue.mp3","audio/status.mp3","audio/strategies.mp3","audio/structure.mp3","audio/submarine.mp3","audio/substitute.mp3","audio/suburb.mp3","audio/sufficient.mp3","audio/survey.mp3","audio/symbol.mp3","audio/task.mp3","audio/technical.mp3","audio/technique.mp3","audio/technology.mp3","audio/terrorist.mp3","audio/text.mp3","audio/textile.mp3","audio/theory.mp3","audio/thriving.mp3","audio/tongue.mp3","audio/towering.mp3","audio/traditional.mp3","audio/transfer.mp3","audio/universally.mp3","audio/urban.mp3","audio/valid.mp3","audio/vanguard.mp3","audio/variables.mp3","audio/vitality.mp3","audio/volume.mp3","audio/warfare.mp3","audio/waves.mp3","audio/wax.mp3","audio/wretched.mp3"];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(CORE);
    // 音频逐个缓存，单个失败不影响整体（保证离线也能听发音）
    await Promise.allSettled(AUDIO.map(u => c.add(u).catch(() => {})));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached =>
      cached || fetch(e.request).then(resp => {
        const url = new URL(e.request.url);
        if (resp && resp.status === 200 && url.origin === self.location.origin) {
          const cp = resp.clone();
          caches.open(CACHE).then(c => c.put(e.request, cp));
        }
        return resp;
      }).catch(() => caches.match('index.html'))
    )
  );
});
