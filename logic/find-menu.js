import call from '../utils/call'
import context from './context'


const findMenu = (filter) => {
    const { API_URL } = context

    return call('GET', `${API_URL}/menu`, { 'Content-type': 'application/json' }, JSON.stringify({ filter }))
        .then(response => {
            const { status, body } = response

            if (status !== 200) {
                const { error } = JSON.parse(body);

                throw new Error(error);
            }

            const { menu } = JSON.parse(body);

            return menu
        })
}


