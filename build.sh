export DENO_INSTALL="/vercel/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"

if ! [ -x "$(command -v deno)" ]; then
  curl -fsSL https://deno.land/x/install/install.sh | sh
fi

