export default function formatFileName(name) {
  name = name.toLowerCase().replace(/\s+/g, '-');
  name = name.replace(/[^a-z0-9\-]/g, '');
  return name;
}
