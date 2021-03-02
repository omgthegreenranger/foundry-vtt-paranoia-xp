/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function() {

  // Define template paths to load
  const templatePaths = [
    // Attribute list partial.
    "systems/paranoia_xp_unofficial/templates/parts/npc-sheet.html",
    "systems/paranoia_xp_unofficial/templates/parts/troubleshooter-sheet.html"
  ];

  // Load the template parts
  return loadTemplates(templatePaths);
};
